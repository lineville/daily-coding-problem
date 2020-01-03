// * Daily Coding Problem Fri Dec 13 2019
// * [Medium] -- Facebook
/**
 * * Given a multiset (just an array that contains multiple sets) return true
 * * if the multiset can be split in two sets with the same sum.
 */
// ! Ex: split({15, 5, 20, 10, 35, 15, 10}) => {15, 5, 10, 15, 10}, {20, 35} sums = 55 true
// ! Ex: split({15, 5, 20, 10, 35}) => false
var split = function (multiset) {
    var result = false;
    // * Do the work
    return result;
};
var testSplit = function () {
    var input1 = [15, 5, 20, 10, 35, 15, 10];
    var input2 = [15, 5, 20, 10, 35];
    var expectedResult1 = true;
    var expectedResult2 = false;
    var result1 = split(input1);
    var result2 = split(input2);
    console.log(expectedResult1 == result1 ? "Passed" : "Failed");
    console.log(expectedResult2 == result2 ? "Passed" : "Failed");
};
testSplit();
