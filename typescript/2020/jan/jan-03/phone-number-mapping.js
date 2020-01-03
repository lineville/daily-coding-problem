// * Daily Coding Problem Jan 3rd 2020
// * [Easy] -- Yelp
// * Given the classical T9 phone mapping of numbers to a set of letters
// * And a digit string (like a phone number), return an array that contains all
// * possible combos of words that could come from that number string.
// ! Ex: “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
var arrayEquals = require('simple-unit-test-utility').arrayEquals;
var mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};
// * Recursive solution
var phoneMapping = function (digits) {
    return phoneMappingHelper(digits, []);
};
var phoneMappingHelper = function (digits, prevCombos) {
    // * Base case, we have an empty digit string
    if (digits.length == 0) {
        return prevCombos;
    }
    // * Create a new array of combinations, from this digits letter and previous combos
    var combinations = [];
    var digit = parseInt(digits[0]);
    var letters = mapping[digit];
    // * If this is the first one, just add the letters
    if (prevCombos.length === 0) {
        return phoneMappingHelper(digits.slice(1), letters);
    }
    // * Pair each new letter with each existing combo
    prevCombos.forEach(function (combo) {
        letters.forEach(function (letter) {
            combinations.push(combo + letter);
        });
    });
    return phoneMappingHelper(digits.slice(1), combinations);
};
var testPhoneMap = function () {
    var input1 = '23';
    var expected1 = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    var result1 = phoneMapping(input1);
    var passed1 = arrayEquals(expected1, result1);
    console.log(passed1 ? "Passed" : "Failed. Got " + result1);
    var input2 = '2345';
    var expected2 = [
        'adgj', 'adgk', 'adgl', 'adhj', 'adhk', 'adhl', 'adij', 'adik', 'adil',
        'aegj', 'aegk', 'aegl', 'aehj', 'aehk', 'aehl', 'aeij', 'aeik', 'aeil',
        'afgj', 'afgk', 'afgl', 'afhj', 'afhk', 'afhl', 'afij', 'afik', 'afil',
        'bdgj', 'bdgk', 'bdgl', 'bdhj', 'bdhk', 'bdhl', 'bdij', 'bdik', 'bdil',
        'begj', 'begk', 'begl', 'behj', 'behk', 'behl', 'beij', 'beik', 'beil',
        'bfgj', 'bfgk', 'bfgl', 'bfhj', 'bfhk', 'bfhl', 'bfij', 'bfik', 'bfil',
        'cdgj', 'cdgk', 'cdgl', 'cdhj', 'cdhk', 'cdhl', 'cdij', 'cdik', 'cdil',
        'cegj', 'cegk', 'cegl', 'cehj', 'cehk', 'cehl', 'ceij', 'ceik', 'ceil',
        'cfgj', 'cfgk', 'cfgl', 'cfhj', 'cfhk', 'cfhl', 'cfij', 'cfik', 'cfil'
    ];
    var result2 = phoneMapping(input2);
    var passed2 = arrayEquals(expected2, result2);
    console.log(passed2 ? "Passed" : "Failed. Got " + result2);
};
testPhoneMap();
