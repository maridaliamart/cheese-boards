const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});
module.exports = {User};