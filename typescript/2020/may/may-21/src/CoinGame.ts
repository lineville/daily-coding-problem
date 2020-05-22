// * Daily Coding Problem May 21 2020

// * [Medium] -- Square

// * In front of you is a row of N coins, with values v1, v1, ..., vn.

// * You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row,
// * removing it from the row, and receiving the value of the coin.

// * Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.

export default class CoinGame {
  private coins: Array<number>;

  constructor(size: number) {
    this.coins = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
  }

  showGame() {
    console.log(this.coins.join(", "));
  }

  playGame() {
    this.showGame();
  }
}
