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
    test('User can have many boards', async () => {
        await sequelize.sync({ force: true });
        let oneUser = await User.create(seedUser[0]);
        let firstBoard = await Board.create(seedBoard[0]);
        let secondBoard = await Board.create(seedBoard[1]);
        await oneUser.addBoard(firstBoard);
        await oneUser.addBoard(secondBoard);
        
        const menus = await oneUser.getBoard();

        expect(menus.length).toBe(2);
        expect(menus[0] instanceof User).toBeTruthy;
    })
    test('Board can have many cheeses', async () => {
        await sequelize.sync({ force: true });
        let oneBoard = await Board.create(seedBoard[0]);
        let firstCheese = await Cheese.create(seedCheese[0]);
        let secondCheese = await Cheese.create(seedCheese[1]);
        await oneBoard.addCheese(firstCheese);
        await oneBoard.addCheese(secondCheese);
        
        const menus = await oneBoard.getCheese();

        expect(menus.length).toBe(2);
        expect(menus[0] instanceof Board).toBeTruthy;

    })

    test('Cheese can be on many Boards', async () =>{
        await sequelize.sync({ force: true });
        await Board.create(seedBoard[0]);
        let firstBoard = await Board.create(seedBoard[0]);
        let roquefort = await Cheese.create(seedCheese[0]);
        let camembert = await Cheese.create(seedCheese[1]);
        await firstBoard.addCheese(roquefort);
        await firstBoard.addCheese(camembert);
        
        const menus = await roquefort.getBoard();

        expect(menus.length).toBe(2);

    })


    
    



})