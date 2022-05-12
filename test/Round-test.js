const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    it('should be a function', () => {

        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        const deck = new Deck([card1, card2, card3, card4, card5]);
        const round = new Round(deck);

        expect(round).to.be.an.instanceof(Round);
    }); 

    it('should return a current card', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        const deck = new Deck([card1, card2, card3, card4, card5]);
        const round = new Round(deck);
        
        expect(round.deck).to.equal(deck.cards);
        // expect(round.returnCurrentCard()).to.equal(round.deck[0]);
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should have a turn counter', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        const deck = new Deck([card1, card2, card3, card4, card5]);
        const round = new Round(deck);
        
        expect(round.turns).to.equal(0);
    });

    it('should be able to increment number of turns by 1', () => {
        const card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        const card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        const card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        const card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        const deck = new Deck([card1, card2, card3, card4, card5]);
        const round = new Round(deck);
        
        round.takeTurn();

        expect(round.turns).to.equal(1);
    });

});