let amqp = require('amqplib')
let rabbitMQInfo = {
    hostname: "39.106.173.121",
    port: "5672",
    username: "admin",
    password: "admin"
}

module.exports = async function connectRabbitMQ(queueName, callback) {
    console.log("'%s' is listen", queueName)
    try {
        let conn = await amqp.connect(rabbitMQInfo);

        const channel = await conn.createChannel();

        await channel.assertQueue(queueName, {autoDelete: true, durable: false})
        await channel.consume(queueName, async function (message) {
            let data = JSON.parse(message.content.toString())
            callback(data)
        });

        conn.on("error", function (err) {
            console.log(queueName, "have an error,start re connect", err);
            setTimeout(connectRabbitMQ, 10000, queueName, callback);
        });
        conn.on("close", function (err) {
            console.log(queueName, "closed ,start re connect", err);
            setTimeout(connectRabbitMQ, 10000, queueName, callback);
        });
    } catch (e) {
        console.log(e)
        setTimeout(connectRabbitMQ, 10000, queueName, callback);
    }
}