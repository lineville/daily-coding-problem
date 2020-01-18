// * Daily Coding Problem Jan 17th 2020

// * [Hard] -- Palantir

/**
 * * Given a number represented by a list of digits, find the next greater permutation of a number,
 * * in terms of lexicographic ordering. If there is not greater permutation possible,
 * * return the permutation with the lowest value/ordering.
 * ! Ex:  [1,2,3] =>  [1,3,2]
 * ! EX: [1,3,2] =>  [2,1,3]
 * ! EX: [3,2,1] => [1,2,3]
 *
 * * CONSTRAINT: Can you perform the operation without allocating extra memory (disregarding the input memory)?
 */

export const nextGreatesPermuation = (digits: Array<number>): Array<number> => {
  // * CASE: Sorted in ascending order, we have smallest number so swap last two.
  let isSorted: boolean = true
  digits.forEach((digit: number, idx: number) => {
    if (idx !== digits.length - 1) {
      let next : number = digits[idx + 1]
      if (next < digit) {
        isSorted = false
      }
    }
  })
  
  if (isSorted) {
    digits = swap(digits, digits.length - 1, digits.length - 2)
    return digits
  }
  
  // * CASE: Any other case, traverse from right until we find first descending digit.
  // * Swap that digit with the smallest digit amongst the ones to the right of digit.
  // * Then sort the digits right of digit in ascending order.
  for (let i: number = digits.length - 2; i >= 0; i--) {
    let currentDigit : number = digits[i];
    let previousDigit : number = digits[i + 1];
    
    if (currentDigit < previousDigit) {
      swap(digits, i, digits.length - 1);
      let rightSide : Array<number> = digits.slice(i + 1).sort((a, b) => a - b);
      let leftSide : Array<number> = digits.slice(0, i + 1);
      return leftSide.concat(rightSide);
    }
  }
  // * CASE: Sorted in descending order, we have biggest number so return smallest
  return digits.sort((a, b) => a - b);
};

// * Swaps values at index i and j and returns resulting array
const swap = (arr: Array<number>, i : number, j :number) : Array<number> => {
  const temp : number = arr[i];
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}
