const httpMonitor = require('./httpmonitor')
const pageMonitor = require('./pagemonitor')
const errorMonitor = require('./errormonitor')
const pv = require('./pv')


module.exports = {
    httpMonitor: httpMonitor,
    errorMonitor: errorMonitor,
    pv: pv,
    pageMonitor: pageMonitor,
};