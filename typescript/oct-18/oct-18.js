// Liam Neville
// Daily Coding Problem Oct 18 2019
// Given an array of integers (nums) find the first missing positive integer
// AKA: Find the lowest positive integer that does not exist in the array.
var testAll = function () {
    var input1 = [3, 4, -1, 1];
    var expectedOutput1 = 2;
    console.log(testLowestPositive(input1, expectedOutput1) ? "Test Passed [ " + input1 + " ] => " + expectedOutput1 : "Test Failed");
    var input2 = [1, 2, 0];
    var expectedOutput2 = 3;
    console.log(testLowestPositive(input2, expectedOutput2) ? "Test Passed [ " + input2 + " ] => " + expectedOutput2 : "Test Failed");
    var input3 = [5, 7, -9, 2, 1];
    var expectedOutput3 = 3;
    console.log(testLowestPositive(input3, expectedOutput3) ? "Test Passed [ " + input3 + " ] => " + expectedOutput3 : "Test Failed");
};
var testLowestPositive = function (nums, expectedResult) {
    var result = lowestPositive(nums);
    var passed = result === expectedResult;
    return passed;
};
var lowestPositive = function (nums) {
    var positivesSorted = nums.filter(function (n) { return n > 0; }).sort(function (a, b) { return a - b; });
    for (var i = 0; i < positivesSorted.length; i++) {
        if (positivesSorted[i] !== i + 1)
            return i + 1;
    }
    return positivesSorted.length + 1;
};
testAll();
