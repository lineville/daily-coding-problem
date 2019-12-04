// * Daily Coding Problem Dec 4th 2019

// * [Medium] -- Facebook

// * Given a function that generates random nums from 1 ... k (inclusive)
// * Where k is an input, write a function that shuffles a deck of cards
// * which is an array of 52 cards

// * Should be O(N) and each of the 52! permutations are equally likely

interface Card {
  suit: string;
  value: number;
  name: string;
}

const suits = ["♣️", "♠️", "♥️", "♦️"];

const randomCardIndex = (k: number): number => {
  return Math.floor(Math.random() * k + 1);
};

class Deck {
  cards: Array<Card>;

  constructor() {
    this.cards = new Array<Card>();

    suits.forEach(suit => {
      for (let i = 2; i <= 14; i++) {
        let name: string = i > 10 ? this.faceCard(i) : i.toString();
        let card: Card = { suit: suit, value: Math.min(10, i), name: name };
        this.cards.push(card);
      }
    });
  }

  shuffle = (): void => {
    this.cards.forEach((card: Card, idx: number) => {
      let randIdx: number = randomCardIndex(this.cards.length);
      this.swapCards(idx, randIdx);
    });
  };

  swapCards = (i: number, j: number): void => {
    let temp: Card = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  };

  randomCard = (): Card => {
    let idx: number = randomCardIndex(this.cards.length);
    return this.cards[idx];
  };

  print = (): void => {
    this.cards.forEach((card: Card) => {
      console.log(card.name + " of " + card.suit);
    });
  };

  faceCard = (val: number): string => {
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
            throw new Error("Bad facecard")
    }
  };
}

const testShuffle = (): void => {
  let deck = new Deck();
  deck.print()
  deck.shuffle()
  deck.print()
};

testShuffle();
