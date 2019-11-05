let db = require('../db');
let Sequelize = require('sequelize');

let httpMonitor = db.defineModel('resourcemonitor', {
    appId: Sequelize.STRING,
    resourceUrl: Sequelize.STRING,
    initiatorType: Sequelize.STRING,
    duration: Sequelize.DOUBLE,
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = httpMonitor;