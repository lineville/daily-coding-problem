// Daily Coding Problem Nov 13 2019
// * You are given an array of non-negative integers that represents a two-dimensional elevation map
// * where each element is unit-width wall and the integer is the height.
// * Suppose it will rain and all spots between two walls get filled up.
// * Compute how many units of water remain trapped on the map in O(N) time and O(1) space.
// ! Ex: unitsOfWater([2, 1, 2]) => 1 You can store one unit of water in the middle between the twos
// ! Ex: unitsOfWater([3, 0, 1, 3, 0, 5]) => 3 + 2 + 3 = 8. You can store 3 in index 1, 2 in index 2 and 3 in index 4 (left wall shorter)
var unitsOfWater = function (elevationMap) {
    if (elevationMap.length < 3) {
        throw new Error("Need at least three data points for an elevation map");
    }
    //   let totalUnits: number = 0;
    var noZeros = elevationMap.filter(function (height) { return height != 0; });
    var highToLow = noZeros.sort(function (a, b) { return b - a; });
    var totalSquareArea = highToLow[0] * highToLow.length;
    var wallArea = highToLow.reduce(function (prev, acc) { return prev + acc; }, 0);
    // * Do the work ...
    return totalSquareArea - wallArea;
};
var testUnitsOfWater = function () {
    var input1 = [2, 1, 2];
    var input2 = [3, 0, 1, 3, 0, 5];
    var expextedResult1 = 1;
    var expextedResult2 = 8;
    var result1 = unitsOfWater(input1);
    var result2 = unitsOfWater(input2);
    console.log(result1 == expextedResult1 ? "Passed" : "Failed");
    console.log(result2 == expextedResult2 ? "Passed" : "Failed");
};
testUnitsOfWater();
