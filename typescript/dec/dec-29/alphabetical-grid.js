// * Daily Coding Problem Dec 29th 2019
// * [Medium] -- Google
// * Given an N x M matrix of letters determine the number of columns that need to be removed
// * Such that each column is alphabetically ordered top to bottom
// ! Ex:
// * cba
// * daf
// * ghi
// * Column 2 needs to be deleted a is out of order
var columnsToDelete = function (grid) {
    var result = 0;
    if (grid.length === 0) {
        throw new Error('Empty grid');
    }
    var numColumns = grid[0].length;
    for (var i = 0; i < numColumns; i++) {
        // * For each column
        // let col: Array<string> = []
        var charCode = 0;
        var sortedCol = true;
        for (var j = 0; j < grid.length; j++) {
            var letter = grid[j][i];
            var letterVal = letter.charCodeAt(0);
            if (letterVal < charCode) {
                sortedCol = false;
            }
            charCode = letterVal;
        }
        if (!sortedCol) {
            result++;
        }
    }
    return result;
};
var testAlphabeticalGrid = function () {
    var input1 = [
        ['c', 'b', 'a'],
        ['d', 'a', 'f'],
        ['g', 'h', 'i'],
    ];
    var input2 = [['a', 'b', 'c', 'd', 'e', 'f']];
    var input3 = [
        ['z', 'y', 'x'],
        ['w', 'v', 'u'],
        ['t', 's', 'r'],
    ];
    var expected1 = 1;
    var expected2 = 0;
    var expected3 = 3;
    var result1 = columnsToDelete(input1);
    var result2 = columnsToDelete(input2);
    var result3 = columnsToDelete(input3);
    console.log(result1 === expected1 ? 'Passed' : 'Failed');
    console.log(result2 === expected2 ? 'Passed' : 'Failed');
    console.log(result3 === expected3 ? 'Passed' : 'Failed');
};
testAlphabeticalGrid();
