const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

Board.belongsTo(User);
User.hasMany(Board)
Cheese.belongsTo(Board);
Board.hasMany(Cheese);
Cheese.belongsToMany(User, {through: 'cheese_user'}) 

module.exports = {Board, Cheese, User}