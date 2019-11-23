let moment = require('moment');
const httpMonitor = require('../../../data/model/httpmonitor');

module.exports = async function (e) {
    await httpMonitor.create({
        appId: e.appId,
        url: e.url,
        httpApi: e.httpApi,
        status: e.status,
        statusText: e.statusText,
        responseText: e.responseText,
        timeStart: e.timeStart,
        currentTime: e.currentTime,
        loadTime: e.loadTime,
        siteName: e.siteName,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).catch((e) => {
        console.log('error is happen at pagetarget consumer', e)
    })
}