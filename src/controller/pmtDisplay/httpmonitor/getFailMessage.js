const Sequelize = require('sequelize')
const db = require('../../../data/db')
// async function getFailMessage(data) {
//     return await data.map(function (e) {
//         await db.seq.query(`select httpApi,count(httpApi) as num, AVG(loadTime),date_format(now(),\'%Y%m%d\') ,max(responseText) as countTime from httpmonitor where siteName='${b[i].siteName}' and status = 404 and date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by httpApi;`, {
//             type: Sequelize.QueryTypes.SELECT
//         })
//     })
// }
module.exports = async function (data) {
    for (let i = 0; i < data.length; i++) {
        data[i].message = await db.seq.query(`select httpApi, responseText,count(responseText) as counts from httpmonitor where siteName='${data[i].siteName}' and status=404 and httpApi='${data[i].httpApi}'  and date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by responseText;`, {
            type: Sequelize.QueryTypes.SELECT
        })
    }
    return data
}