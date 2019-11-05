let moment = require('moment');
const httpmonitor = require('../../data/model/pv');
module.exports = async function (e) {
    await httpmonitor.create({
        appId: e.appId,
        orgUrl: e.orgUrl,
        targetUrl: e.targetUrl,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).catch((e) => {
        console.log('error is happen at pv consumer', e)
    })
}