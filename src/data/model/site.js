let db = require('../db');
let Sequelize = require('sequelize');

let Site = db.defineModel('site', {
    id: Sequelize.INTEGER,
    siteName: Sequelize.STRING
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Site