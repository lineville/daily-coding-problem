// Daily Coding Problem Nov 8 2019
// Implement regular expression matching with the following special characters:
// * . (period) which matches any single character
// * * (asterisk) which matches zero or more of the preceding element
// * That is, implement a function that takes in a string and a valid regular expression
// * and returns whether or not the string matches the regular expression.
// * Contract: matches = (regex: string, input: string) => boolean
// ! Ex: matches("ra.", "ray") => true
// ! Ex: matches("ra.", "raymond") => false
// ! Ex: matches(".*at", "chat") => true
// ! Ex: matches(".*at", "combat") => true
// ! Ex: matches(".*at", "chats") => false
var matches = function (regex, input) {
    var result = true;
    var inputIndex = 0;
    for (var i = 0; i < regex.length; i++) {
        var letter = regex[i];
        if (letter == ".") {
        }
        else if (letter == "*") {
            if (i == regex.length - 1) {
                return true;
            }
            var letterAfterAsterisk = regex[i + 1];
            while (input[inputIndex] != letterAfterAsterisk) {
                console.log("looping on an *");
                inputIndex++;
            }
            i++;
        }
        else {
            if (letter != input[inputIndex]) {
                return false;
            }
        }
        inputIndex++;
    }
    return result && inputIndex === input.length;
};
var testRegexMatcher = function () {
    var regex1 = "ra.";
    var regex2 = ".*at";
    var regex3 = "*";
    var regex4 = ".*a*.a";
    var input1 = "ray";
    var input2 = "raymond";
    var input3 = "chat";
    var input4 = "chats";
    var input5 = "combat";
    var input6 = "aksjdfuaweusifhawoisfnalsdkfnalksfjaskljfajdfoawhbefuioawbfoianf";
    var input7 = "bf892asfjsopidjfsdflkea";
    var input8 = "bf892asfjsopidjfsdflkeaasdf";
    var expectedResult1 = true;
    var expectedResult2 = false;
    var expectedResult3 = true;
    var expectedResult4 = false;
    var expectedResult5 = true;
    var expectedResult6 = true;
    var expectedResult7 = true;
    var expectedResult8 = false;
    var result1 = matches(regex1, input1);
    var result2 = matches(regex1, input2);
    var result3 = matches(regex2, input3);
    var result4 = matches(regex2, input4);
    var result5 = matches(regex2, input5);
    var result6 = matches(regex3, input6);
    //   const result7: boolean = matches(regex4, input7);
    //   const result8: boolean = matches(regex4, input8);
    console.log(result1 === expectedResult1 ? "Passed ✔️" : "Failed ❌");
    console.log(result2 === expectedResult2 ? "Passed ✔️" : "Failed ❌");
    console.log(result3 === expectedResult3 ? "Passed ✔️" : "Failed ❌");
    console.log(result4 === expectedResult4 ? "Passed ✔️" : "Failed ❌");
    console.log(result5 === expectedResult5 ? "Passed ✔️" : "Failed ❌");
    console.log(result6 === expectedResult6 ? "Passed ✔️" : "Failed ❌");
    //   console.log(result7 === expectedResult7 ? "Passed ✔️" : "Failed ❌");
    //   console.log(result8 === expectedResult8 ? "Passed ✔️" : "Failed ❌");
};
testRegexMatcher();
