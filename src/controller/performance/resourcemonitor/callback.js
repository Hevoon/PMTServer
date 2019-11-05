let moment = require('moment');
const resourceMonitor = require('../../../data/model/resourcemonitor');
module.exports = async function (e) {
    await resourceMonitor.create({
        appId: e.appId,
        resourceUrl: e.resourceUrl,
        initiatorType: e.initiatorType,
        duration: e.duration,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).catch((e) => {
        console.log('error is happen at resource consumer', e)
    })
}