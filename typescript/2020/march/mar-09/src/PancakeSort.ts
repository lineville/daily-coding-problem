// * Daily Coding Problem March 9th 2020

// * [Hard] -- .... Pancake Sort problem

// * Sort a list using this reverseList(nums, i, j) that reverses the list from i to j.
// * This is the pancake sort algorithm because when visualized it is flipping pancake over and over

export const flip = (nums: number[], i: number, j: number): number[] => {
  return nums.slice(i, j + 1).reverse();
};

export const pancakeSort = (nums: number[]): number[] => {
  for (let i = nums.length - 1; i >= 1; i--) {
    let max_idx = 0;
    let max = nums[0];
    for (let j = 1; j <= i; j++) {
      if (nums[j] > max) {
        max = nums[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    let new_slice;

    if (max_idx > 0) {
      new_slice = flip(nums, 0, max_idx);
      for (let j = 0; j <= max_idx; j++) nums[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = nums.slice(0, i + 1).reverse();
    for (let j = 0; j <= i; j++) nums[j] = new_slice[j];
  }
  return nums;
};
