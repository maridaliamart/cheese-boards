const {sequelize, Sequelize} = require('../db');


let User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});
module.exports = {User};