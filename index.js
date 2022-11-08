const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

Board.belongsTo(User);
User.hasMany(Board)
Cheese.belongsTo(Board);
Board.hasMany(Cheese);
User.hasMany(Cheese, {through: 'cheese_board'}) 
module.exports = {Board, Cheese, User}