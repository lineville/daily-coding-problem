// *  Daily Coding Problem Dec 2nd 2019
// * Max Sub Array
// * Given an array of integers, (positive or negative) return the sub-array with max sum.
// ! Ex: maxSubArray( [34, -50, 42, 14, -5, 86] ) => [42, 14, -5, 85] sum =  136
// ! Ex: maxSubArray( [-5, -1, -8, -9] ) => [] sum = 0
var maxSubArray = function (numbers) {
    var bestSubArray = new Array();
    var bestSum = 0;
    numbers.forEach(function (num, index) {
        var potentialSum = bestSum + num;
        // * If we encounter a value that puts us in the negative then reset bestSubArray and sum
        if (potentialSum < 0) {
            bestSum = 0;
            bestSubArray = [];
        }
        else {
            bestSum += num;
            bestSubArray.push(num);
        }
    });
    return bestSubArray;
};
var sum = function (nums) {
    return nums.reduce(function (prev, acc) { return prev + acc; }, 0);
};
var testMaxSubArray = function () {
    var input1 = [34, -50, 42, 14, -5, 86];
    var input2 = [-5, -1, -8, -9];
    var expected1 = [42, 14, -5, 86];
    var expected2 = [];
    var result1 = maxSubArray(input1);
    var result2 = maxSubArray(input2);
    var expectedSum1 = sum(expected1);
    var expectedSum2 = sum(expected2);
    var resultSum1 = sum(result1);
    var resultSum2 = sum(result2);
    console.log(resultSum1 === expectedSum1
        ? "Passed sum: " + resultSum1
        : "Failed! Expected: " + expectedSum1 + " but got: ", resultSum1);
    console.log(resultSum2 === expectedSum2
        ? "Passed sum: " + resultSum2
        : "Failed! Expected: " + expectedSum2 + " but got: ", resultSum2);
};
testMaxSubArray();
