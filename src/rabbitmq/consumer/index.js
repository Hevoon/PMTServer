let consumer = require("./consumer")
let pvCallback = require('../../controller/pv/callback')
let pagetargetCallback = require('../../controller/performance/pagetarget/callback')
let resourceCallback = require('../../controller/performance/resourcemonitor/callback')
let httpCallback = require('../../controller/httpmonitor/callback')
let errorCallback = require('../../controller/errormonitor/callback')
module.exports = function () {
    consumer('pv', pvCallback)
    consumer('pagetarget', pagetargetCallback)
    consumer('resource', resourceCallback)
    consumer('http', httpCallback)
    consumer('error', errorCallback)
}