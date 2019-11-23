let db = require('../db');
let Sequelize = require('sequelize');

let httpMonitor = db.defineModel('pagetarget', {
    appId: Sequelize.STRING,
    whiteScreen: Sequelize.INTEGER,
    pageLoad: Sequelize.INTEGER,
    domTreeCons: Sequelize.INTEGER,
    sourceLoad: Sequelize.INTEGER,
    url: Sequelize.STRING,
    time: Sequelize.DATE,
    siteName: Sequelize.STRING,
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = httpMonitor;