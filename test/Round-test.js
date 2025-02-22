const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let card1, card2, card3, card4, card5, deck, round;

    beforeEach(() => {
        card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card2 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
        card3 = new Card(19, "What does the callback function for filter() return?", ["boolean", "an array of the same length", "a single value of any data type"], "boolean");
        card4 = new Card(24, "Object.assign() can take in an indefinite amount of arguments", ["true", "false"], "true");
        card5 = new Card(29, "map() takes in two optional arguments: the index of the current element, and the array that map was called upon", ["true", "false"], "true");
        deck = new Deck([card1, card2, card3, card4, card5]);
        round = new Round(deck);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceof(Round);
    }); 

    it('should return the current card', () => {
        expect(round.deck).to.equal(deck.cards);
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should have a turn counter that starts at 0', () => {
        expect(round.turns).to.equal(0);
    });

    it('should be able to increment number of turns', () => {
        round.takeTurn("object");
        round.takeTurn("the current element");
        round.takeTurn("boolean");
        round.takeTurn("false");
        round.takeTurn("true");
        
        expect(round.turns).to.equal(5);
    });

    it('should start with no incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('should be able to store incorrect guesses', () => {
        round.takeTurn("function");

        expect(round.incorrectGuesses).to.deep.equal([2]);
    });

    it('should be able to display that the guess is incorrect', () => {
        expect(round.takeTurn("function")).to.equal('incorrect!');
    });

    it('should be able to display that the guess correct', () => {
        expect(round.takeTurn("array")).to.equal('correct!');
        expect(round.takeTurn("the accumulator")).to.equal('correct!');
        expect(round.takeTurn("boolean")).to.equal('correct!');
        expect(round.takeTurn("true")).to.equal('correct!');
        expect(round.takeTurn("true")).to.equal('correct!');
    });

    it('should be able to calculate percentage of correct answers', () => {
        round.takeTurn("object");
        expect(round.calculatePercentCorrect()).to.equal(0);
        
        round.takeTurn("the accumulator");
        expect(round.calculatePercentCorrect()).to.equal(50);
      });

      it('should be able to end round with a statement', () => {
        round.takeTurn("object");
        
        expect(round.calculatePercentCorrect()).to.equal(0);
        expect(round.endRound()).to.equal(`** Round over! ** You answered 0% of the questions correctly!`);

        round.takeTurn("the accumulator");

        expect(round.calculatePercentCorrect()).to.equal(50);
        expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});