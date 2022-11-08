const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

Board.belongsTo(User);
User.hasMany(Board)
Cheese.belongsTo(Board);
Board.hasMany(Cheese);

module.exports = {Board, Cheese, User}