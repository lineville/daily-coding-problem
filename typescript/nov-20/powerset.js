// * [Easy] Daily Coding Problem
// * Compute the powerset of a given set.
// ! Ex: powerset({1, 2, 3}) => { {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3} }
// ! Ex: powerset({1, 2, 3, 4}) => { {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}, {2, 3, 4}, {1, 3, 4}, {1, 2, 4}, {1, 2, 3, 4} }
var _a = require("simple-unit-test-utility"), didTestPass = _a.didTestPass, arrayEquals = _a.arrayEquals;
var testPowerset = function () {
    var input = [1, 2, 3];
    var expectedOutput = [
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3]
    ];
    var resultrec = powerset(input);
    var passedrec = deepArrayEquals(resultrec, expectedOutput);
    console.log(passedrec ? "Passed ✔️" : "Failed ❌");
};
var deepArrayEquals = function (arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = 0; i < arr1.length; i++) {
        if (!arrayEquals(arr1[i], arr2[i]))
            return false;
    }
    return true;
};
// * Recursive version will use array for simplicity and assume it is a Set (no duplicates)
var powerset = function (set) {
    // * Base Case [] => [ [] ]
    if (set.length === 0) {
        return [[]];
    }
    else {
        // * Recursive case: [1, 2, 3] => insert 3 into the powerset of [1, 2]
        return insertIntoSubsets(powerset(set.slice(0, set.length - 1)), set.pop());
    }
};
// * Inserts the element into each of the the subsets and concatenates the original subsets without the element
// * insertIntoSubsets([[], [a], [b]], c) => [[], [a], [b], [c], [a, c], [b, c]]
var insertIntoSubsets = function (subsets, element) {
    return subsets.concat(subsets.map(function (set) { return set.concat(element); }));
};
testPowerset();
