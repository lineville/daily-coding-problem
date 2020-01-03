// * Daily Coding Problem
// * Nov 18 2019
/**
 * * Given an array of strictly the characters 'R', 'G', and 'B',
 * * segregate the values of the array so that all the Rs come first,
 * * the Gs come second, and the Bs come last.
 * * You can only swap elements of the array.
 *
 * ! Do this in linear time O(N) and in place (no using extra data structures)
 *
 * * Ex: ['G', 'B', 'R', 'R', 'B', 'R', 'G'] => ['R', 'R', 'R', 'G', 'G', 'B', 'B']
 */
var _a = require("simple-unit-test-utility"), didTestPass = _a.didTestPass, arrayEquals = _a.arrayEquals;
var triSort = function (arr) {
    // All R's ... all G's ... all B's
    var rIndex = 0;
    var gIndex = 0;
    var bIndex = arr.length - 1;
    while (gIndex <= bIndex) {
        switch (arr[gIndex]) {
            case "R":
                console.log("Swapping elements at indexes " + rIndex + " and " + gIndex);
                swapLetters(arr, rIndex, gIndex);
                rIndex++;
                gIndex++;
                break;
            case "G":
                gIndex++;
                break;
            case "B":
                console.log("Swapping elements at indexes " + gIndex + " and " + bIndex);
                swapLetters(arr, gIndex, bIndex);
                bIndex--;
                break;
            default:
                break;
        }
        console.log(arr);
    }
    return arr;
};
var swapLetters = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var testTriSort = function () {
    var input1 = ["G", "B", "R", "R", "B", "R", "G"];
    var expectedResult1 = ["R", "R", "R", "G", "G", "B", "B"];
    var result = triSort(input1);
    didTestPass(expectedResult1, result);
};
testTriSort();
