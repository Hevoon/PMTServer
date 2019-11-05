let db = require('../db');
let Sequelize = require('sequelize');

let httpMonitor = db.defineModel('httpmonitor', {
    appId: Sequelize.STRING,
    url: Sequelize.STRING,
    httpApi: Sequelize.STRING,
    status: Sequelize.INTEGER,
    statusText: Sequelize.TEXT,
    responseText: Sequelize.TEXT,
    timeStart: Sequelize.STRING,
    currentTime: Sequelize.STRING,
    loadTime: Sequelize.INTEGER,
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = httpMonitor;