let moment = require('moment');
const errorMonitor = require('../../../data/model/errormonitor');

module.exports = async function (e) {
    if (e.isVue) {
        console.log(e.detailType,'sds')
        await errorMonitor.create({
            appId: e.appId,
            message: e.message,
            type: e.type,
            place: e.place,
            detailType: e.detailType,
            component: e.component,
            isVue: true,
            siteName: e.siteName,
            time: moment().format('YYYY-MM-DD HH:mm:ss')
        }).catch((e) => {
            console.log('error is happen at pagetarget consumer', e)
        })
    } else {
        await errorMonitor.create({
            appId: e.appId,
            message: e.message,
            type: e.type,
            place: e.place,
            lineno: e.lineno,
            colon: e.colon,
            isVue: false,
            siteName: e.siteName,
            time: moment().format('YYYY-MM-DD HH:mm:ss')
        }).catch((e) => {
            console.log('error is happen at pagetarget consumer', e)
        })
    }

}