// * Daily Coding Problem April 29th 2020

// * [Medium] -- Google

// * Given a set of distinct positive integers, find the largest subset
// * such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

// ! Ex:  [3, 5, 10, 20, 21] =>  [5, 10, 20].
// ! Ex:  [1, 3, 6, 24] => [1, 3, 6, 24].

export const largestDivisibleSubset = (nums: Array<number>): Array<number> => {
  let start = 0;
  let end = 1;
  let largestSubsetSize = 1;

  while (end < nums.length) {
    if (satisfiesCondition(nums[start], nums[end])) {
      end++;
      largestSubsetSize = Math.max(
        largestSubsetSize,
        nums.slice(start, end).length
      );
    } else {
      start++;
      end++;
    }
  }

  return nums.slice(start, end);
};

export const satisfiesCondition = (i: number, j: number): boolean => {
  return i % j === 0 || j % i === 0;
};

// * It has been impossible to prove that this function will always end at 1
export const collatz = (num: number): number => {
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    console.log(num);
  }
  return num;
};
