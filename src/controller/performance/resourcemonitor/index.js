let producer = require('../../../rabbitmq/producer');
module.exports = async (ctx, next) => {
    let name = 'resource'
    let message = {
        appId: ctx.cookies.get("appId"),
        resourceUrl: ctx.request.body.url,
        initiatorType: ctx.request.body.initiatorType,
        duration: ctx.request.body.duration,
    }
    producer(name, message)
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'OK'

}