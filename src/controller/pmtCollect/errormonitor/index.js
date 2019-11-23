let producer = require('../../../rabbitmq/producer');
module.exports = async (ctx, next) => {
    let name = 'error'
    let message = {
        appId: ctx.cookies.get("appId"),
        message: ctx.request.body.message,
        type: ctx.request.body.type,
        place: ctx.request.body.place,
        detailType: ctx.request.body.detailType,
        lineno: ctx.request.body.lineno,
        colon: ctx.request.body.colon,
        component: ctx.request.body.component,
        isVue: ctx.request.body.isVue,
        siteName: ctx.request.body.name,
    }
    producer(name, message)
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'OK'
}