// Liam Neville
// Daily Coding Problem Oct 16 2019
// Given an array of integers, return a new array such that each element at index i 
// of the new array is the product of all the numbers in the original array except the one at i.
var main = function () {
    var input = [3, 2, 1];
    var expectedOutput = [2, 3, 6];
    var result = arrayProductNoDivision(input);
    var passed = result.toString() === expectedOutput.toString();
    console.log("Passed ? " + passed);
    result = arrayProductDivision(input);
    passed = result.toString() === expectedOutput.toString();
    console.log("Passed ? " + passed);
};
var arrayProductNoDivision = function (nums) {
    var result = new Array();
    nums.forEach(function (num) {
        var allOthers = nums.filter(function (n) { return n != num; });
        var product = allOthers.reduce(function (prev, acc) { return prev * acc; }, 1);
        result.push(product);
    });
    return result;
};
var arrayProductDivision = function (nums) {
    var result = new Array();
    var totalProduct = nums.reduce(function (prev, acc) { return prev * acc; }, 1);
    nums.forEach(function (num) {
        var val = totalProduct / num;
        result.push(val);
    });
    return result;
};
main();
