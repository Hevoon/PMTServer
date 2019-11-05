const compose = require('koa-compose');

async function midd2(ctx, next) {
    await next();
    console.log(ctx.path);
}

async function resTime(ctx, next) {
    let startTime = new Date().getTime();
    await next();
    let endTime = new Date().getTime();
    console.log(`响应时间${endTime - startTime}ms`);
}



const all = compose([resTime, midd2]);

module.exports = () => {
    return all
};