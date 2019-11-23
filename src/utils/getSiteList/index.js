const Sequelize = require('sequelize')
const db = require('../../data/db')
module.exports = async function getSiteList() {
    let b = await db.seq.query(`select siteName,id from site`, {
        type: Sequelize.QueryTypes.SELECT
    })
    return await createSiteList(b)
}

async function createSiteList(data) {
    let list = []
    await data.map(function (e) {
        e.value = []
        list.push(e)
    })
    return list
}
