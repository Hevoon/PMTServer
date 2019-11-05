let amqp = require('amqplib')
let conn
let rabbitMQInfo = {
    hostname: "39.106.173.121",
    port: "5672",
    username: "admin",
    password: "admin"
}
amqp.connect(rabbitMQInfo).then((_conn) => {
    conn = _conn
})

module.exports = function (queueName, message, errCallback) {
    conn.createChannel().then(function (ch) {
        return ch.assertQueue(queueName, {autoDelete: true, durable: false})
            .then(function () {
                ch.sendToQueue(queueName, Buffer.from(JSON.stringify(message)))
                return ch.close()
            })
            .catch(function (error) {
                if (data) {
                    errCallback && errCallback(error);
                }
            })
    })
}



