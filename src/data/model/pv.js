let db = require('../db');
let Sequelize = require('sequelize');

let pv = db.defineModel('pv', {
    appId: Sequelize.STRING,
    orgUrl: Sequelize.STRING,
    targetUrl: Sequelize.STRING,
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = pv;