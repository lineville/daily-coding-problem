// * Daily Coding Problem Dec 10th 2019
/**
 * *  Given a string s and an integer k, break up the string into multiple lines
 * *  such that each line has a length of k or less. You must break it up so that
 * *  words don't break across lines. Each line has to have the maximum possible
 * *  amount of words. If there's no way to break the text up, then return null.
 */
var wordSplitter = function (input, limit) {
    var allWords = input.split(" ");
    if (allWords.filter(function (val) { return val.length > limit; }).length > 0) {
        // * There exists a word greater than limit so it will not be possible
        return null;
    }
    // * It is possible to split up the given input
    var result = [];
    var lineIndex = 0;
    var line = "";
    allWords.forEach(function (word) {
        var lengthIfAdded = lineIndex + word.length + 1;
        if (lengthIfAdded > limit) {
            lineIndex = 0;
            result.push(line);
            line = "";
        }
        line += lineIndex === 0 ? word : " " + word;
        lineIndex += word.length;
    });
    result.push(line);
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
    var expectedResult1 = [
        "the quick",
        "brown fox",
        "jumps over",
        "the lazy",
        "dog"
    ];
    var passed = arrayEquals(result1, expectedResult1);
    console.log(result1);
    console.log(passed ? "Passed" : "Failed");
    var result2 = wordSplitter(input1, 2);
    console.log(result2 === null ? "Passed" : "Failed");
};
testWordSplitter();
