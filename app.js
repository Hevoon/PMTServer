const Koa = require('koa');
const Router = require('./src/router');
const middleware = require('./src/middleware');
const app = new Koa();
let channelConsumer = require('./src/rabbitmq/consumer')


middleware(app);
Router(app);
channelConsumer()

app.listen(3010, () => {
    console.log('server is running at http://localhost:3000');
});


