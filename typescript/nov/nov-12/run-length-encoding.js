// Daily Coding Problem Nov 12 2019
/**
 * * Run-length encoding is a fast and simple method of encoding strings.
 * * The basic idea is to represent repeated successive characters as a single count and character.
 * * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 */
var runLengthEncoding = function (input) {
    if (input.length == 0) {
        // ! Error handling
        throw new Error("Cannot encode empty string");
    }
    var result = "";
    var currentRun = 1;
    // * For each letter in the input string
    for (var i = 0; i < input.length; i++) {
        var currentChar = input[i];
        // * Compare with next character if we are not at the last letter
        if (i < input.length - 1 && input[i + 1] === currentChar) {
            currentRun++;
        }
        else {
            result += currentRun.toString() + currentChar;
            currentRun = 1;
        }
    }
    return result;
};
var testRunLengthEncoding = function () {
    var input1 = "AAAABBBCCDAA";
    var expectedOutput1 = "4A3B2C1D2A";
    var result1 = runLengthEncoding(input1);
    console.log(expectedOutput1 == result1 ? "Passed ✔️" : "Failed ❌ ");
};
testRunLengthEncoding();
