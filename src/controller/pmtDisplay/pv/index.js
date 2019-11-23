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
        let ub = await db.seq.query(`select date_format(time, \'%Y%m%d\') as times, count(appId) as uv from uv where siteName='${b[i].siteName}'  group by times;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let pb = await db.seq.query(`select date_format(time, \'%Y%m%d\') as times, count(id) as pv from pv where siteName='${b[i].siteName}' group by times;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        b[i].value = await createList(ub, pb)
    }
    return b
}