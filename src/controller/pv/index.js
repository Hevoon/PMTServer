let moment = require('moment');
let producer = require('../../rabbitmq/producer');

module.exports = async (ctx, next) => {
    let name = 'pv'
    let message = {
        appId: ctx.cookies.get("appId"),
        orgUrl: ctx.request.body.orgUrl,
        targetUrl: ctx.request.body.targetUrl,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    producer(name, message)

    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'success'
}

// let moment = require('moment');
// const httpmonitor = require('../../data/model/pv');
// module.exports = async (ctx, next) => {
//     await httpmonitor.create({
//         appId: ctx.cookies.get("appId"),
//         orgUrl: ctx.request.body.orgUrl,
//         targetUrl: ctx.request.body.targetUrl,
//         time: moment().format('YYYY-MM-DD HH:mm:ss')
//
//     }).then(
//         () => {
//             ctx.response.state = 200
//             ctx.response.status = 200
//             ctx.response.message = 'OK'
//         }
//     ).catch((e) => {
//         console.log(e)
//     })
// }