// * Daily Coding Problem Dec 10th 2019
/**
 * *  Given a string s and an integer k, break up the string into multiple lines
 * *  such that each line has a length of k or less. You must break it up so that
 * *  words don't break across lines. Each line has to have the maximum possible
 * *  amount of words. If there's no way to break the text up, then return null.
 */
var wordSplitter = function (input, limit) {
    var result = null;
    return result;
};
var arrayEquals = function (arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length)
        return false;
    var result = true;
    arr1.forEach(function (str, idx) {
        if (arr2[idx] !== str) {
            result = false;
        }
    });
    return result;
};
var testWordSplitter = function () {
    var input1 = "the quick brown fox jumps over the lazy dog";
    var limit1 = 10;
    var result1 = wordSplitter(input1, limit1);
    var expectedResult1 = ["the quick", "brown fox", "jumps over", "the lazy", "dog"];
    var expectedResult2 = ["the quick", "brown fox", "jumps over", "the lazy", "dog"];
    var passed = arrayEquals(result1, expectedResult1);
    var mustBe = arrayEquals(expectedResult1, expectedResult2);
    console.log(mustBe);
    console.log(passed ? "Passed" : "Failed");
};
testWordSplitter();
