const Router = require('koa-router');
const Pmt = require('./controller/pmtCollect/pmt.js')
const PmtDisplay = require('./controller/pmtDisplay/pmt.js')
const router = Router();


module.exports = (app) => {
    router.get('/init', Pmt.init);
    router.get('/test', Pmt.test);

    router.post('/httpmonitor', Pmt.httpMonitor);
    router.get('/httpdisplay', PmtDisplay.httpMonitor);

    router.post('/errormonitor', Pmt.errorMonitor);
    router.get('/errordisplay', PmtDisplay.errorMonitor);

    router.post('/pv', Pmt.pv);
    router.get('/pvdisplay', PmtDisplay.pv);

    router.post('/resourcemonitor', Pmt.resourceMonitor);
    router.post('/pagetarget', Pmt.pageTarget);
    router.get('/pagedisplay', PmtDisplay.pageMonitor);

    app.use(router.routes()).use(router.allowedMethods());
}