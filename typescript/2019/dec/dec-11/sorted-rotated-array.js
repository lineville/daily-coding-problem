// * Daily Coding Problem Dec 11th 2019
// * [Medium] -- Amazon
/**
 * * An sorted array of integers was rotated an unknown number of times.

 * * Given such an array, find the index of the element in the array in faster than linear time.
 * * If the element doesn't exist in the array, return null.

 */
// ! Ex: indexOfElement([13, 18, 25, 2, 8, 10], 8) => 4  (the index of 8 in the array).
// * You can assume all the integers in the array are unique.
var indexOfElement = function (numbers, searchValue) {
    var resultIndex = null;
    if (numbers.length === 0) {
        throw new Error("Empty array of numbers");
    }
    // * 1) Find pivot (2) index of biggest element (25) this is when it flips to smaller
    //  * and divide the array into two smaller arrays at that splitting point
    // * 2) Call binary search for one of the sub arrays (each are sorted)
    // * If we are bigger than first element search the bigger array etc.
    // * 3) Find the index using BST and return index
    var pivot = findPivot(numbers, 0, numbers.length - 1);
    if (pivot === -1) {
        return binarySearch(numbers, 0, numbers.length - 1, searchValue);
    }
    if (numbers[pivot] === searchValue) {
        return pivot;
    }
    if (numbers[0] <= searchValue) {
        return binarySearch(numbers, 0, pivot - 1, searchValue);
    }
    return binarySearch(numbers, pivot + 1, numbers.length - 1, searchValue);
    ;
};
var binarySearch = function (numbers, low, high, target) {
    if (high < low) {
        return -1;
    }
    var mid = (low + high) / 2;
    if (target == numbers[mid]) {
        return mid;
    }
    if (target > numbers[mid]) {
        return binarySearch(numbers, mid + 1, high, target);
    }
    return binarySearch(numbers, low, mid - 1, target);
};
var findPivot = function (numbers, low, high) {
    if (high < low) {
        return -1;
    }
    if (high === low) {
        return low;
    }
    var mid = (low + high) / 2;
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
var testIndexOfElement = function () {
    var input = [13, 18, 25, 2, 8, 10];
    var searchValue = 8;
    var expectedResult = 4;
    var result = indexOfElement(input, searchValue);
    console.log(expectedResult === result ? "Passed" : "Failed");
};
testIndexOfElement();
