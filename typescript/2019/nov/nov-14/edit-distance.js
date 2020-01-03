// import { didTestPass } from 'simple-unit-test-utility';
// Daily Coding Problem
// Nov 14 2019
// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions
//  required to change one string to the other.
// ! EX: editDistance(“kitten”, “sitting”) => “k” => “s”,“e” => “i”, append “g”.
var didTestPass = require("simple-unit-test-utility").didTestPass;
var editDistance = function (source, target) {
    var result = 0;
    var shorter = source.length < target.length ? source : target;
    var longer = source.length > target.length ? source : target;
    for (var i = 0; i < shorter.length; i++) {
        if (source[i] !== target[i]) {
            result++;
        }
    }
    var numLettersToAppend = longer.length - shorter.length;
    result += numLettersToAppend;
    return result;
};
var testEditDistance = function () {
    // * K I T T E N    .length = 6
    // * S I T T I N G  .length = 7
    // * _ I T T _ N _
    // * 3 blanks
    var input1 = "kitten";
    var target1 = "sitting";
    var expectedResult1 = 3;
    var result1 = editDistance(input1, target1);
    didTestPass(expectedResult1, result1);
    // * ---------------------------------
    // * B I N G O
    // * D E N T I S T
    // * _ _ N _ _ _ _
    var input2 = "bingo";
    var target2 = "dentist";
    var expectedResult2 = 6;
    var result2 = editDistance(input2, target2);
    didTestPass(expectedResult2, result2);
    // * ----------------------------------
    // * B E W I L D E R
    // * W I L D
    // * _ _ _ _ _ _ _ _
    // * GOING TO BREAK WITH THIS TEST
    var input3 = "bewilder";
    var target3 = "wild";
    var expectedResult3 = 4;
    var result3 = editDistance(input3, target3);
    didTestPass(expectedResult3, result3);
};
testEditDistance();
