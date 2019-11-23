const Sequelize = require('sequelize')
const db = require('../../../data/db')
let getSiteList = require('../../../utils/getSiteList')

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
        let vue = await db.seq.query(`select  message,count(message) as count,type,place,component, date_format(now(),\'%Y%m%d\') as countTime,siteName from errormonitor where siteName='${b[i].siteName}' and  date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) and isVue = 1 group by message,place,component,type;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        let org = await db.seq.query(`select  message,count(message) as count,type,place,lineno,colon, date_format(now(),\'%Y%m%d\') as countTime,siteName from errormonitor where siteName='${b[i].siteName}' and  date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) and isVue = 0 group by message,lineno,colon,type,place;`, {
            type: Sequelize.QueryTypes.SELECT
        })
        b[i].vue = vue
        b[i].org = org
    }
    return b
}