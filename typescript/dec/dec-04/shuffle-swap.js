// * Daily Coding Problem Dec 4th 2019
var suits = ["♣️", "♠️", "♥️", "♦️"];
var randomCardIndex = function (k) {
    return Math.floor(Math.random() * k + 1);
};
var Deck = /** @class */ (function () {
    function Deck() {
        var _this = this;
        this.shuffle = function () {
            _this.cards.forEach(function (card, idx) {
                var randIdx = randomCardIndex(_this.cards.length);
                _this.swapCards(idx, randIdx);
            });
        };
        this.swapCards = function (i, j) {
            var temp = _this.cards[i];
            _this.cards[i] = _this.cards[j];
            _this.cards[j] = temp;
        };
        this.randomCard = function () {
            var idx = randomCardIndex(_this.cards.length);
            return _this.cards[idx];
        };
        this.print = function () {
            _this.cards.forEach(function (card) {
                console.log(card.name + " of " + card.suit);
            });
        };
        this.faceCard = function (val) {
            switch (val) {
                case 11:
                    return "Jack";
                case 12:
                    return "Queen";
                case 13:
                    return "King";
                case 14:
                    return "Ace";
                default:
                    throw new Error("Bad facecard");
            }
        };
        this.cards = new Array();
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
var testShuffle = function () {
    var deck = new Deck();
    deck.print();
    deck.shuffle();
    deck.print();
    //   deck.shuffle();
    //   console.log(deck.print());
    //   console.log("------------------------")
};
testShuffle();
