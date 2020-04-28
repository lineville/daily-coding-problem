// * Daily Coding Problem April 28th 2020

// * [Easy] -- Amazon

// * Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

export const rotateArray = (nums: Array<number>, k: number): Array<number> => {
  return [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
};
