// const sequelize = require('sequelize');

const initFunc = require('./init')
const httpMonitor = require('./httpmonitor')
const pv = require('./pv')
const resourceMonitor = require('./performance/resourcemonitor')
const pageTarget = require('./performance/pagetarget')
const errorMonitor = require('./errormonitor')

module.exports = {
    //页面的uv统计初始化
    init: initFunc,
    //监控接口请求
    httpMonitor: httpMonitor,
    errorMonitor: errorMonitor,
    pv: pv,
    resourceMonitor: resourceMonitor,
    pageTarget: pageTarget,
    test: async (ctx, next) => {
        console.log(ctx.cookies.get("appId"))
        ctx.response.state = 200
        ctx.response.status = 200
        ctx.response.message = 'OK'
    }
};