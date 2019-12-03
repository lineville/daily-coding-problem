// Daily Coding Problem Nov 1 2019
// Liam Neville
// Given an array of integers and a number k, where 1 <= k <= length of the array,
// compute the maximum values of each subarray of length k.
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// ! Constraints
// Do this in O(n) time and O(k) space.
// You can modify the input array in-place and you do not need to store the results.
// You can simply print them out as you compute them.
// * Nice readable ES6 way
var maxSubArrayVals = function (nums, k) {
    // * Error catching
    if (k < 1) {
        throw new Error("subarray length must be at least 1");
    }
    if (nums.length == 0) {
        throw new Error("array length must be at least 1");
    }
    var index = 0;
    while (index < nums.length - k + 1) {
        var currRange = nums.slice(index, index + k);
        var maxOfLastK = Math.max.apply(Math, currRange);
        console.log(maxOfLastK);
        index++;
    }
};
maxSubArrayVals([10, 5, 2, 7, 8, 7], 3);
