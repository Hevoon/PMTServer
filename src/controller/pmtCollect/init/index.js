let moment = require('moment');
const init = require('../../../data/model/init');
module.exports = async (ctx, next) => {
    //设定为每日的23:59:59过期
    let endDate = moment().endOf("day").format('YYYY-MM-DD HH:mm:ss')
    //转化为时间戳
    let endDateUx = moment(endDate, 'YYYY-MM-DD HH:mm:ss').valueOf();
    //判断cookie是否存在
    if (ctx.cookies.get("appId")) {
        ctx.body = 'have a appId'
    } else {
        //若不存在
        let Id;
        await init.max("id").then(
            async function (e) {
                Id = e + 1;
                await init.create({
                    appId: Id,
                    url: ctx.query.url,
                    siteName: ctx.query.name,
                    time: moment().format('YYYY-MM-DD')
                })
            }
        ).then(function () {
            ctx.cookies.set("appId", Id, {httpOnly: false, expires: new Date(endDateUx)})
        })
    }
    ctx.response.state = 200
    ctx.response.status = 200
    ctx.response.message = 'OK'
}