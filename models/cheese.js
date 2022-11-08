const {sequelize, Sequelize} = require('../db');

let Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});
module.exports = {Cheese};