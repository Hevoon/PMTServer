let config = {
    database: 'pmt', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'wjsw123lhy', // 口令
    host: '39.106.173.121', // 主机名
    port: 3306, // 端口号，MySQL默认3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

module.exports = config;