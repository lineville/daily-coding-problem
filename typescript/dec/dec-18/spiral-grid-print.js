// * Daily Coding Problem Wed Dec 18 2019
// * [Easy] -- Amazon
// * Given an M x N matrix, print out the values in a clockwise spiral
/**
 * [[1,  2,  3,  4,  5],
 * [6,  7,  8,  9,  10],
 * [11, 12, 13, 14, 15],
 * [16, 17, 18, 19, 20]]
 *
 * 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
 *
 */
var _a = require("./node_modules/simple-unit-test-utility"), arrayEquals = _a.arrayEquals, didTestPass = _a.didTestPass;
var testSpiralPrint = function () {
    var input = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
    ];
    var expected = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12];
    var result = spiralOrder(input);
    didTestPass(expected, result);
};
var spiralOrder = function (grid) {
    var result = [];
    return result;
};
testSpiralPrint();
