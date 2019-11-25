const Sequelize = require('sequelize')
const db = require('../../../data/db')

module.exports = async function (data) {
    for (let i = 0; i < data.length; i++) {
        data[i].message = await db.seq.query(`select httpApi, responseText,count(responseText) as counts from httpmonitor where siteName='${data[i].siteName}' and status=404 and httpApi='${data[i].httpApi}'  and date_format(time, \'%Y%m%d\') >= (date_format(now(),\'%Y%m%d\')-9) group by responseText;`, {
            type: Sequelize.QueryTypes.SELECT
        })
    }
    return data
}