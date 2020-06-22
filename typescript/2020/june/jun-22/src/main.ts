// * Daily Coding Problem June 22 2020

// * [Easy] -- Palantir

// * The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one.
// ! Ex: 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

// * Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.

// * This will return an array of the denominators in Egyptian form since all numerators will be 1
export const egyptianFraction = (
  numerator: number,
  denominator: number,
  denominators: number[] = [],
  index: number = 0
): Array<number> => {
  if (numerator === 1) {
    denominators.push(denominator)
  } else {
    let nextDenominator = Math.ceil(denominator / numerator)
    denominators.push(nextDenominator)
    let gcd = greatestCommonDivisor(
      numerator * nextDenominator - denominator,
      denominator * nextDenominator
    )
    return egyptianFraction(
      Math.floor((numerator * nextDenominator - denominator) / gcd),
      Math.floor((denominator * nextDenominator) / gcd),
      denominators,
      index + 1
    )
  }
  return denominators
}

const greatestCommonDivisor = (a: number, b: number): number => {
  return a === 0 ? b : greatestCommonDivisor(b % a, a)
}
