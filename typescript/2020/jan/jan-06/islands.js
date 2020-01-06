// * Daily Coding Problem Jan 6th 2020
// * [Medium] -- Amazon
/**
 * * Given a 2d matrix of 1's (land) and 0's water, count the number of islands
 * ! Ex:
 * 1 0 0 0 0
 * 0 0 1 1 0
 * 0 1 1 0 0
 * 0 0 0 0 0
 * 1 1 0 0 1
 * 1 1 0 0 1
 *
 * * 4 islands
 */
var numberOfIslands = function (grid) {
    var result = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            if (grid[i][j] == 1) {
                recHelper(grid, i, j);
                result++;
            }
        }
    }
    return result;
};
var directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];
var recHelper = function (grid, i, j) {
    if (i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] == 0 ||
        grid[i][j] == 2) {
        return;
    }
    grid[i][j] = 2;
    directions.forEach(function (dir) {
        recHelper(grid, i + dir[0], j + dir[1]);
    });
};
var testIslandCounter = function () {
    var input = [
        [1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1]
    ];
    var expected = 4;
    var result = numberOfIslands(input);
    console.log(result === expected ? "Passed" : "Failed");
};
testIslandCounter();
