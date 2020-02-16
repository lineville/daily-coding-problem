// * Daily Coding Problem Feb 15 2020

// * [Easy] -- Microsoft

// * You have n fair coins and you flip them all at the same time.
// * Any that come up tails you set aside. The ones that come up heads you flip again.

// * How many rounds do you expect to play before only one coin remains?

// * Write a function that, given n, returns the number of rounds you'd expect to
// * play until one coin remains.

// * Algorithm: divide n / 2 over and over until n is 1. Return how many times we divided

// * Recursive one liner that provides base value for accumulator as default parameter
export default function howManyRounds(n: number, rounds: number = 0): number {
  return n === 1 ? rounds : howManyRounds(Math.round(n / 2), rounds + 1)
}
