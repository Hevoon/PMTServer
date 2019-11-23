let producer = require('../../../rabbitmq/producer');
module.exports = async (ctx, next) => {
    let name = 'http'
    let message = {
        appId: ctx.cookies.get("appId"),
        url: ctx.request.body.url,
        httpApi: ctx.request.body.httpApi,
        status: ctx.request.body.status,
        statusText: ctx.request.body.statusText,
        responseText: ctx.request.body.responseText,
        timeStart: ctx.request.body.timeStart,
        currentTime: ctx.request.body.currentTime,
        loadTime: ctx.request.body.loadTime,
        siteName: ctx.request.body.name,
    }
    producer(name, message)
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'OK'

}