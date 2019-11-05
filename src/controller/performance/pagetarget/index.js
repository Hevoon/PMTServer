let producer = require('../../../rabbitmq/producer');
module.exports = async (ctx, next) => {
    let name = 'pagetarget'
    let message = {
        appId: ctx.cookies.get("appId"),
        whiteScreen: ctx.request.body.whiteScreen,
        pageLoad: ctx.request.body.pageLoad,
        domTreeCons: ctx.request.body.domTreeCons,
        sourceLoad: ctx.request.body.sourceLoad,
        url: ctx.request.body.url,
    }
    producer(name, message)
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'OK'

}