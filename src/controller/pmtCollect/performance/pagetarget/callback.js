let moment = require('moment');
const pagetarget = require('../../../../data/model/pagetarget');
module.exports = async function (e) {
    await pagetarget.create({
        appId: e.appId,
        whiteScreen: e.whiteScreen,
        pageLoad: e.pageLoad,
        domTreeCons: e.domTreeCons,
        sourceLoad: e.sourceLoad,
        url: e.url,
        siteName: e.siteName,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }).catch((e) => {
        console.log('error is happen at pagetarget consumer', e)
    })
}