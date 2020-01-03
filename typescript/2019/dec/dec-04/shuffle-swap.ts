// * Daily Coding Problem Dec 4th 2019

// * [Medium] -- Facebook

// * Given a function that generates random nums from 1 ... k (inclusive)
// * Where k is an input, write a function that shuffles a deck of cards
// * which is an array of 52 cards

// * Should be O(N) and each of the 52! permutations are equally likely

// * Step 1: Understand the problem
// * The objective is to shuffle a deck of cards in linear time in such a way that
// * could result in any of the 52! possibilities with equal probability. This means
// * that we can only make one pass over our deck to ensure linear time complexity.

// * Step 2: Construct a representative data structure for our deck

// * Step 3: Implement the logic to shuffle the deck. All we are doing is stepping through the deck
// * and swapping each card with another randomly selected card. This should result in a purely random
// * shuffle since each card has equal probability of ending up in any location.

// * Typed object to represent a playing card
type Card = {
  suit: string // * '♣️', '♠️', '♥️', '♦️'
  value: number // * 2 .. 10
  name: string // * 2, 3, 4 ... Jack, Queen, King, Ace
}

// * The four options for a suite
const suits = ['♣️', '♠️', '♥️', '♦️']

// * Returns a random integer between 0 ... k
const randomCardIndex = (k: number): number => {
  return Math.floor(Math.random() * k)
}

// * Represents a deck of 52 standard playing cards
class Deck {
  cards: Array<Card>

  // * Creates a new deck of cards
  constructor() {
    this.cards = new Array<Card>()

    // * For each of the 4 suites, create the card and push it to the deck
    suits.forEach(suit => {
      for (let i = 2; i <= 14; i++) {
        let name: string = i > 10 ? this.faceCard(i) : i.toString()
        let card: Card = { suit: suit, value: Math.min(10, i), name: name }
        this.cards.push(card)
      }
    })
  }

  // * Shuffle and replace the existing deck of cards
  shuffle = (): void => {
    this.cards.forEach((card: Card, idx: number) => {
      let randIdx: number = randomCardIndex(this.cards.length)
      this.swapCards(idx, randIdx)
    })
  }

  // * Swaps card at index i with card at index j
  swapCards = (i: number, j: number): void => {
    let temp: Card = this.cards[i]
    this.cards[i] = this.cards[j]
    this.cards[j] = temp
  }

  // * Draws a randomly selected card from the deck
  randomCard = (): Card => {
    let idx: number = randomCardIndex(this.cards.length)
    return this.cards[idx]
  }

  // * Prints out the deck of cards in its current order
  print = (): void => {
    this.cards.forEach((card: Card) => {
      console.log(card.name + ' of ' + card.suit)
    })
  }

  // * Gets the string value of the facecard given its numerical value
  faceCard = (val: number): string => {
    switch (val) {
      case 11:
        return 'Jack'
      case 12:
        return 'Queen'
      case 13:
        return 'King'
      case 14:
        return 'Ace'
      default:
        throw new Error('Bad facecard')
    }
  }
}

// * Tests the shuffle implementation of the deck of cards
const testShuffle = (): void => {
  let deck = new Deck()
  deck.print()
  console.log('-------------------------')
  console.log('Shuffle')
  deck.shuffle()
  console.log('-------------------------')
  deck.print()
}

testShuffle()
