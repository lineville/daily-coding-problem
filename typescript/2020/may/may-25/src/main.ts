// * Daily Coding Problem May 25 2020

// * ******************************

// * Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

// ! Ex:  [1, 2, 3, 10] --> 7

export const smallestPositiveNotInSubset = (nums: number[]): number => {
  let result: number = 1

  nums.forEach((n: number) => {
    result += n <= result ? n : 0
  })
  return result
}
