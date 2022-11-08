const {sequelize, Sequelize} = require('../db');
const {Board, Cheese, User} = require('./models');

describe('board, cheese, and user models', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })
    test('can create a User', async () => {
        const testUser = await User.create(seedUser[0])
        expect(testUser.name).toBe(seedUser[0])
    })
    test('can create a Board', async () => {
        const testBoard = await Board.create(seedBoard[0])
        expect(testBoard.name).toBe(seedBoard[0])
    })
    test('can create a Cheese', async () => {
        const testCheese = await Cheese.create(seedCheese[0])
        expect(testCheese.name).toBe(seedCheese[0])
    })
    test('can find User', async () => {
        const foundUser = await User.findAll()
        expect(foundUser.length).toBe(1)
        expect(foundUser[0].name).toBe(seedUser[0].name)
    })
    test('can find Board', async () => {
        const foundBoard = await Board.findAll()
        expect(foundBoard.length).toBe(1)
        expect(foundBoard[0].title).toBe(seedBoard[0].title)
    })
    test('can find Cheese', async () => {
        const foundCheese = await Cheese.findAll()
        expect(foundCheese.length).toBe(1)
        expect(foundCheese[0].title).toBe(seedCheese[0].title)
    })
    test('can delete User', async () => {
        const foundUser = await User.findAll()
        const deletedUser = await foundUser[0].destroy();
        expect(deletedUser.name).toBe(seedUser[0].name)
    })
    test('can delete Board', async () => {
        const foundBoard = await Board.findAll()
        const deletedBoard = await foundBoard[0].destroy();
        expect(deletedBoard.name).toBe(seedBoard[0].name)
    })
    test('can delete Cheese', async () => {
        const foundCheese = await Cheese.findAll()
        const deletedCheese = await foundCheese[0].destroy();
        expect(deletedCheese.name).toBe(seedCheese[0].name)
    })







})