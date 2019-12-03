"use strict";
// Daily Coding Problem Nov 5 2019
// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list.
// If there is more than one possible reconstruction, return any of them.
//If there is no possible reconstruction, then return null.
exports.__esModule = true;
// EX: given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox",
//  return => ['the', 'quick', 'brown', 'fox'].
// EX: Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond",
// return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
var prefix_trie_ts_1 = require("prefix-trie-ts");
var passedTest = function (expected, actual) {
    console.log("Result: " + actual.toString() + " Expected: " + expected);
    console.log(arrayEquals(actual, expected) ? "Passed ✔️" : "Failed ❌");
};
var arrayEquals = function (arr1, arr2) {
    if (arr1.length != arr2.length)
        return false;
    arr1.forEach(function (word, index) {
        if (word !== arr2[index])
            return false;
    });
    return true;
};
var findWordTrie = function (words, sentance) {
    var result = new Array();
    // * a) Use a Trie. Store the list of words as one trie (similar to pangram prob)
    // * use the target sentance string to greedily search into the trie constructing biggest word posible
    // * Once valid word is found, add it to list, continue from where we were in sentance, stop when sentance over.
    var trie = new prefix_trie_ts_1.Trie(words);
    var currWord = "";
    for (var i = 0; i < sentance.length; i++) {
        currWord += sentance[i];
        var possibleWords = trie.getPrefix(currWord);
        // * Optimization (if there is only one option, take that word and greedily skip ahead)
        if (possibleWords.length == 1) {
            var chosenWord = possibleWords[0];
            result.push(chosenWord);
            i += chosenWord.length - currWord.length;
            currWord = "";
        }
    }
    return result;
};
var findWordObject = function (words, sentance) {
    var result = new Array();
    // * b) Put the words into an object for faster named lookup. Start with first character and check if that string
    // * is in the object. If not, keep creating larger word from sentence until we find a match, use that word put in list
    // * and continue to check the object and add characters.
    var dictionary = {};
    words.forEach(function (word) {
        dictionary[word] = true;
    });
    var currWord = "";
    for (var i = 0; i < sentance.length; i++) {
        currWord += sentance[i];
        if (dictionary[currWord]) {
            result.push(currWord);
            currWord = "";
        }
    }
    return result;
};
var testWordFinder = function () {
    var testWords1 = ["quick", "brown", "the", "fox"];
    var targetWord1 = "thequickbrownfox";
    var expectedResult1 = ["the", "quick", "brown", "fox"];
    var result1 = findWordObject(testWords1, targetWord1);
    var result1Trie = findWordTrie(testWords1, targetWord1);
    passedTest(expectedResult1, result1);
    passedTest(expectedResult1, result1Trie);
    var testWords2 = ["bed", "bath", "bedbath", "and", "beyond"];
    var targetWord2 = "bedbathandbeyond";
    var expectedResult2 = ["bed", "bath", "and", "beyond"];
    var expectedResult2Alt = ["bedbath", "and", "beyond"];
    var result2 = findWordObject(testWords2, targetWord2);
    var result2Trie = findWordTrie(testWords2, targetWord2);
    passedTest(expectedResult2, result2);
    passedTest(expectedResult2Alt, result2Trie);
};
testWordFinder();
