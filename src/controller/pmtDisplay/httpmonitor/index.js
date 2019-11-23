const Sequelize = require('sequelize')
const db = require('../../../data/db')
let getSiteList = require('../../../utils/getSiteList')
let createList = require('./createList.js')
let getFailMessage = require('./getFailMessage.js')

module.exports = async (ctx, next) => {
    let siteList = await getSiteList()
    let a
    if (Array.isArray(siteList)) {
        a = await handle(siteList)
    }
    ctx.response.body = a
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'success'
}

async function handle(b) {
    for (let i = 0; i < b.length; i++) {
        let fail = await db.seq.query(`select date_format(time, \'%Y%m%d\') as times, AVG(loadTime) as loadTime, count(status) as failCount from httpmonitor where siteName='${b[i].siteName}' and status = 404 group by times;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let success = await db.seq.query(`select date_format(time, \'%Y%m%d\') as times,AVG(loadTime) as loadTime, count(status) as successCount from httpmonitor where siteName='${b[i].siteName}' and status = 200 group by times;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let detailFail = await db.seq.query(`select httpApi,count(httpApi) as num, AVG(loadTime) as loadTime,date_format(now(),\'%Y%m%d\') as countTime,siteName from httpmonitor where siteName='${b[i].siteName}' and status = 404 and date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by httpApi;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let detail = await getFailMessage(detailFail)
        b[i].value = await createList(fail, success, detail)
    }
    return b
}