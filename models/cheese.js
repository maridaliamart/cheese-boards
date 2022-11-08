const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});
module.exports = {Cheese};