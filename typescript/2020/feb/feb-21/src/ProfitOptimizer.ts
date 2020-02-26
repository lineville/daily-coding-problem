// * Daily Coding Problem Feb 21 2020

// ***********************************

// * [Medium] -- Facebook

/**
 * * Given an array of numbers representing the stock prices of a company in chronological order
 * * and an integer k, return the maximum profit you can make from k buys and sells.
 * * You must buy the stock before you can sell it, and you must sell the stock before
 * * you can buy it again.
 *
 * ! Ex: given k = 2 and the array [5, 2, 4, 0, 1] return 3.
 */

export default function maxProfit(
  prices: Array<number>,
  availableBuys: number
): number {
  // * : profitTable[i][j] : max profit at using at most i transations up to day j
  let profitTable = initializeGrid(availableBuys + 1, prices.length + 1, 0);

  for (let i: number = 1; i <= availableBuys; i++) {
    let prevDiff: number = Number.NEGATIVE_INFINITY;
    for (let j: number = 1; j < prices.length; j++) {
      prevDiff = Math.max(prevDiff, profitTable[i - 1][j - 1] - prices[j - 1]);
      profitTable[i][j] = Math.max(profitTable[i][j - 1], prices[j] + prevDiff);
    }
  }
  return profitTable[availableBuys][prices.length - 1];
}

export const initializeGrid = (
  rows: number,
  cols: number,
  value: any
): Array<Array<any>> => {
  return Array.from(Array(rows), _ => Array(cols).fill(value));
};
