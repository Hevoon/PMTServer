let db = require('../db');
let Sequelize = require('sequelize');

let Init = db.defineModel('uv', {
    appId: Sequelize.STRING,
    url: Sequelize.STRING,
    time: Sequelize.DATE
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Init;