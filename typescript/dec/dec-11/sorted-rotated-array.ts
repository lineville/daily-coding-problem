// * Daily Coding Problem Dec 11th 2019

// * [Medium] -- Amazon

/**
 * * An sorted array of integers was rotated an unknown number of times.

 * * Given such an array, find the index of the element in the array in faster than linear time. 
 * * If the element doesn't exist in the array, return null.

 */
// ! Ex: indexOfElement([13, 18, 25, 2, 8, 10], 8) => 4  (the index of 8 in the array).

// * You can assume all the integers in the array are unique.

const indexOfElement = (
  numbers: Array<number>,
  searchValue: number
): number | null => {
  let resultIndex: number | null = null;
  if (numbers.length === 0) {
    throw new Error("Empty array of numbers");
  }

  // * 1) Find pivot (2) index of biggest element (25) this is when it flips to smaller
  //  * and divide the array into two smaller arrays at that splitting point
  // * 2) Call binary search for one of the sub arrays (each are sorted)
  // * If we are bigger than first element search the bigger array etc.
  // * 3) Find the index using BST and return index

  let pivot : number = findPivot(numbers, 0, numbers.length - 1)

  if (pivot === -1) {
    return binarySearch(numbers, 0, numbers.length - 1, searchValue);
  }

  if (numbers[pivot] === searchValue) {
    return pivot
  }

  if (numbers[0] <= searchValue) {
    return binarySearch(numbers, 0, pivot - 1, searchValue);
  }

  return binarySearch(numbers, pivot + 1, numbers.length - 1, searchValue);
  ;
};

const binarySearch = (
  numbers: Array<number>,
  low: number,
  high: number,
  target: number
): number => {
  if (high < low) {
    return -1;
  }

  let mid: number = (low + high) / 2;

  if (target == numbers[mid]) {
    return mid;
  }

  if (target > numbers[mid]) {
    return binarySearch(numbers, mid + 1, high, target);
  }

  return binarySearch(numbers, low, mid - 1, target);
};

const findPivot = (
  numbers: Array<number>,
  low: number,
  high: number
): number => {
  if (high < low) {
    return -1;
  }

  if (high === low) {
    return low;
  }

  let mid: number = (low + high) / 2;
  if (mid < high && numbers[mid] > numbers[mid + 1]) {
    return mid;
  }
  if (mid > low && numbers[mid] < numbers[mid - 1]) {
    return mid - 1;
  }
  if (numbers[low] >= numbers[mid]) {
    return findPivot(numbers, low, mid - 1);
  }

  return findPivot(numbers, mid + 1, high);
};

const testIndexOfElement = (): void => {
  const input: Array<number> = [13, 18, 25, 2, 8, 10];
  const searchValue: number = 8;
  const expectedResult: number = 4;
  const result: number | null = indexOfElement(input, searchValue);
  console.log(expectedResult === result ? "Passed" : "Failed");
};

testIndexOfElement();
