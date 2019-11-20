// Daily Coding Problem October 20
// Given a mapping of the alphabet [{ letter: 'a', value: 1}, {letter: 'b', value: 2} ... {letter: 'z', value: 26}]
// and a message of number values ex: 111 then return the number of different encodings that can exist.
// Ex: 111 could have been 'aaa' (1 + 1 + 1), or 'ak' (1 + 11), or 'ka' (11 + 1)
var numberOfEncodings = function (message) {
    var result = 0;
    return result;
};
var main = function () {
    var input1 = '111';
    var expectedOutput1 = 3;
    var result = numberOfEncodings(input1);
    var passFailMessage = expectedOutput1 == result ? "passed" : "failed";
    console.log("Number of Encodings for " + input1 + " is " + result + ". Test " + passFailMessage);
};
main();
