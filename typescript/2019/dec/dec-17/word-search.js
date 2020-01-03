// * Daily Coding Problem Tue Dec 17 2019
// * [Easy] -- Microsoft
// * Given a 2d matrix of letters and a search word, check if target word
// * exists somewhere in the 2d grid, could be vertical or horizontal (no diagonal)
var wordSearch = function (grid, target) {
    var result = false;
    // * Try to find it
    return result;
};
var testWordSearch = function () {
    var input1 = [
        ["F", "A", "C", "I"],
        ["O", "B", "Q", "P"],
        ["A", "N", "O", "B"],
        ["M", "A", "S", "S"]
    ];
    var target1 = "FOAM";
    var expectedResult1 = true;
    var result1 = wordSearch(input1, target1);
    console.log(result1 === expectedResult1 ? "Passed" : "Failed");
};
testWordSearch();
