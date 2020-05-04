// * Daily Coding Problem May 4th 2020

// * [Medium] -- Uber

// * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// * Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

// ! Ex: [5, 7, 10, 3, 4] => 3 (index of smallest element) (10 is the inflection here)

// * Strategy is to apply a tweak to Binary Search in order to find the inflection point in the array.
// * Inflection point is at index i if all elements less than i are greater than first and all elements after i are less than first.
export const findSmallestElement = (nums: Array<number>): number => {
  if (nums.length === 0) {
    throw new Error("Cannot find smallest element of an empty array");
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;

  // * Checking for case where there was no rotation (or rotation was the size of the array aka no rotation)
  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (right >= left) {
    // * Get midpoint
    let mid = left + (right - left) / 2;

    // * Found inflection point
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // * Midpoint is smallest (element after inflection)
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // * Search the elements after midpoint for inflection
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      // * Search the elements before midpoint for inflection
      right = mid - 1;
    }
  }
  throw new Error(
    "Something went wrong, should have found a solution before getting here"
  );
};
