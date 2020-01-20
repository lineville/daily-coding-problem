// * Daily Coding Problem Jan 18 2020

// * Easy -- [Microsoft]

// * Generate all permutations of an array of numbers
// * EX: [1, 2, 3] => [1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]

// * Recursive solution
// * Idea is to insert first number into all possible locations of permutations of rest of numbers
export const permutations = (nums: Array<number>): Array<Array<number>> => {
  let result: Array<Array<number>> = []
  if (nums.length === 0) {
    return result
  }

  if (nums.length == 1) {
    result.push(nums)
    return result
  }

  for (let i: number = 0; i < nums.length; i++) {
    let firstNum = nums[i]
    let rest = nums.slice(0, i).concat(nums.slice(i + 1))
    let innerPermutations = permutations(rest)
    for (let j: number = 0; j < innerPermutations.length; j++) {
      result.push([firstNum].concat(innerPermutations[j]))
    }
  }
  return result
}
