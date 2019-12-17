// * Daily Coding Problem Dec 4th 2019
// * The four options for a suite
var suits = ['♣️', '♠️', '♥️', '♦️'];
// * Returns a random integer between 0 ... k
var randomCardIndex = function (k) {
    return Math.floor(Math.random() * k);
};
// * Represents a deck of 52 standard playing cards
var Deck = /** @class */ (function () {
    // * Creates a new deck of cards
    function Deck() {
        var _this = this;
        // * Shuffle and replace the existing deck of cards
        this.shuffle = function () {
            _this.cards.forEach(function (card, idx) {
                var randIdx = randomCardIndex(_this.cards.length);
                _this.swapCards(idx, randIdx);
            });
        };
        // * Swaps card at index i with card at index j
        this.swapCards = function (i, j) {
            var temp = _this.cards[i];
            _this.cards[i] = _this.cards[j];
            _this.cards[j] = temp;
        };
        // * Draws a randomly selected card from the deck
        this.randomCard = function () {
            var idx = randomCardIndex(_this.cards.length);
            return _this.cards[idx];
        };
        // * Prints out the deck of cards in its current order
        this.print = function () {
            _this.cards.forEach(function (card) {
                console.log(card.name + ' of ' + card.suit);
            });
        };
        // * Gets the string value of the facecard given its numerical value
        this.faceCard = function (val) {
            switch (val) {
                case 11:
                    return 'Jack';
                case 12:
                    return 'Queen';
                case 13:
                    return 'King';
                case 14:
                    return 'Ace';
                default:
                    throw new Error('Bad facecard');
            }
        };
        this.cards = new Array();
        // * For each of the 4 suites, create the card and push it to the deck
        suits.forEach(function (suit) {
            for (var i = 2; i <= 14; i++) {
                var name_1 = i > 10 ? _this.faceCard(i) : i.toString();
                var card = { suit: suit, value: Math.min(10, i), name: name_1 };
                _this.cards.push(card);
            }
        });
    }
    return Deck;
}());
// * Tests the shuffle implementation of the deck of cards
var testShuffle = function () {
    var deck = new Deck();
    deck.print();
    console.log('-------------------------');
    console.log('Shuffle');
    deck.shuffle();
    console.log('-------------------------');
    deck.print();
};
testShuffle();
