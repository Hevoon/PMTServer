const path = require('path');
const statics = require('koa-static');
const bodyPar = require('koa-bodyparser');
const myDone = require('./resTime');
const cors = require('koa2-cors');

module.exports = (app) => {
    app.use(myDone())
    // app.use(statics('.'))
    // cookies签名
    // app.key = ['hevoon', 'happy every day']
    // 跨域设置
    app.use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
        ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
        ctx.set('Access-Control-Allow-Credentials', true)
        await next();
    });
    app.use(bodyPar())
};
