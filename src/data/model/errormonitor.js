let db = require('../db');
let Sequelize = require('sequelize');

let errorMonitor = db.defineModel('errormonitor', {
    appId: Sequelize.STRING,
    message: Sequelize.STRING,
    type: Sequelize.STRING,
    place: Sequelize.STRING,
    detailType: Sequelize.STRING,
    lineno: Sequelize.INTEGER,
    colon: Sequelize.INTEGER,
    component: Sequelize.STRING,
    isVue: Sequelize.BOOLEAN,
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = errorMonitor;