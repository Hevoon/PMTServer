let consumer = require("./consumer")
let pvCallback = require('../../controller/pmtCollect/pv/callback')
let pagetargetCallback = require('../../controller/pmtCollect/performance/pagetarget/callback')
let resourceCallback = require('../../controller/pmtCollect/performance/resourcemonitor/callback')
let httpCallback = require('../../controller/pmtCollect/httpmonitor/callback')
let errorCallback = require('../../controller/pmtCollect/errormonitor/callback')
module.exports = function () {
    consumer('pv', pvCallback)
    consumer('pagetarget', pagetargetCallback)
    consumer('resource', resourceCallback)
    consumer('http', httpCallback)
    consumer('error', errorCallback)
}