// * Daily Coding Problem Jan 21 2020

// * [Medium] -- Microsoft

/**
 * * Given an unsorted array of nums, return the length of greatest streak of numbers.
 * * Streak does not need to be contiguous.
 *
 * ! Ex: [100, 4, 200, 1, 3, 2] => [1, 2, 3, 4] => returns length 4
 * * Must run in O(n) time complexity where n is length of input array
 */

export const longestNumStreak = (nums: Array<number>): number => {
  let result: number = 0;
  let set: Set<number> = new Set<number>(nums);

  nums.forEach((num: number) => {
    if (!set.has(num - 1)) {
      let endOfSequence: number = num;
      while (set.has(endOfSequence)) {
        endOfSequence++
      }

      if (endOfSequence - num > result) {
        result = endOfSequence - num
      }
    }
  });

  return result;
};
