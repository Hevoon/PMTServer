const Sequelize = require('sequelize')
const db = require('../../../data/db')
let getSiteList = require('../../../utils/getSiteList')
let createList = require('./createList.js')


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
        let pageTarget = await db.seq.query(`select date_format(time, \'%Y%m%d\') as times, url, AVG(domTreeCons) as domTreeCons, AVG(whiteScreen) as whiteScreen,AVG(pageLoad) as pageLoad, AVG(sourceLoad) as sourceLoad,date_format(now(),\'%Y%m%d\') as countTime,siteName from pagetarget where siteName='${b[i].siteName}' and  date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by times,url;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let resource = await db.seq.query(`select resourceUrl, AVG(duration) as durationTime,date_format(now(),\'%Y%m%d\') as countTime,siteName from resourcemonitor where siteName='${b[i].siteName}' and  date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by resourceUrl;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        b[i].value = await createList(pageTarget)
        b[i].resourceInfo = resource
    }
    return b
}