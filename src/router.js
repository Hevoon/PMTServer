const Router = require('koa-router');
const Pmt = require('./controller/pmt.js')
const router = Router();


module.exports = (app) => {
    router.get('/init', Pmt.init);
    router.get('/test', Pmt.test);
    router.post('/httpmonitor', Pmt.httpMonitor);
    router.post('/errormonitor', Pmt.errorMonitor);
    router.post('/pv', Pmt.pv);
    router.post('/resourcemonitor', Pmt.resourceMonitor);
    router.post('/pagetarget', Pmt.pageTarget);
    app.use(router.routes()).use(router.allowedMethods());
}