// * Daily Coding Problem Fri August 2021

// * [Easy] -- Amazon

// Given n numbers, find the greatest common denominator between them.

// For example, given the numbers [42, 56, 14], return 14

// Returns the greatest common denominator between num1 and num2 using recursion
export const greatestCommonDenominatorHelper = (
  num1: number,
  num2: number
): number => {
  if (num2 === 0) {
    return num1
  } else {
    return greatestCommonDenominatorHelper(num2, num1 % num2)
  }
}

// Returns the greatest common denominator between num1 and num2 euclidean style
export const greatestCommonDenominatorEuclidean = (
  num1: number,
  num2: number
): number => {
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

// Returns the greatest common denominator of the list of numbers
export const greatestCommonDenominator = (
  numbers: number[],
  fn: (num1: number, num2: number) => number
): number => {
  return numbers.reduce((a, b) => fn(a, b))
}
