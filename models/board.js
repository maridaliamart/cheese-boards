const {sequelize, Sequelize} = require('../db');

let Board = sequelize.define('Board', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});
module.exports = {Board};