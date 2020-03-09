// * Daily Coding Problem March 6th 2020

// * Medium -- Google

// * Given an array of numbers and an index i, return the distance from the number at i
// * to the next largest number in the array in terms of indices.

// ! Ex: [4, 1, 3, 5, 6] and i = 0, return 3, since 5 is next largest to 4 and is 3 indexes away.

// * If two distances to larger numbers are the equal, then return any one of them.
// * If the array at i doesn't have a nearest larger integer, then return null.

export const nearestLargerNumber = (
  nums: Array<number>,
  index: number
): number | null => {
  let left: number = index - 1;
  let right: number = index + 1;

  // nearestLargestNumber(currentVal, left, right)

  // * Start at middle and go out towards either end until one end reaches the end
  while (left >= 0 && right < nums.length) {
    if (nums[left] > nums[index]) {
      return index - left;
    }

    if (nums[right] > nums[index]) {
      return right - index;
    }
    left--;
    right++;
  }

  // * One of the pointers hit the end so keep working on whichever is still in bounds
  while (left >= 0) {
    if (nums[left] > nums[index]) {
      return index - left;
    }
    left--;
  }

  while (right < nums.length) {
    if (nums[right] > nums[index]) {
      return right - index;
    }
    right++;
  }

  // * There existed no largest number
  return null;
};

export const nearestLargestV2 = (
  nums: Array<number>,
  index: number
): number | null => {
  const nearestLargestLeft = nearestLargestOneWay(
    nums[index],
    nums.slice(0, index),
    false
  );
  const nearestLargestRight = nearestLargestOneWay(
    nums[index],
    nums.slice(index + 1),
    true
  );

  if (nearestLargestLeft !== null && nearestLargestRight !== null) {
    return Math.min(nearestLargestLeft, nearestLargestRight);
  }

  return nearestLargestLeft === null ? nearestLargestRight : nearestLargestLeft;
};

const nearestLargestOneWay = (
  target: number,
  nums: Array<number>,
  reverse: boolean
): number | null => {
  if (reverse) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > target) return nums.length - i;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) return i + 1;
    }
  }
  return null;
};
