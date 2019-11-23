let moment = require('moment');
const pv = require('../../../data/model/pv');
module.exports = async function (e) {
    await pv.create({
        appId: e.appId,
        orgUrl: e.orgUrl,
        targetUrl: e.targetUrl,
        siteName: e.siteName,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).catch((e) => {
        console.log('error is happen at pv consumer', e)
    })
}