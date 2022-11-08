const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let Board = sequelize.define('Board', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});
module.exports = {Board};