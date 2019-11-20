// Daily Coding Problem Nov 5 2019
// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list.
// If there is more than one possible reconstruction, return any of them.
//If there is no possible reconstruction, then return null.

// EX: given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox",
//  return => ['the', 'quick', 'brown', 'fox'].

// EX: Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond",
// return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

import { Trie } from "prefix-trie-ts";

const passedTest = (expected: Array<string>, actual: Array<string>): void => {
  console.log("Result: " + actual.toString() + " Expected: " + expected);
  console.log(arrayEquals(actual, expected) ? "Passed ✔️" : "Failed ❌");
};

const arrayEquals = (arr1: Array<string>, arr2: Array<string>): boolean => {
  if (arr1.length != arr2.length) return false;

  arr1.forEach((word: string, index: number) => {
    if (word !== arr2[index]) return false;
  });
  return true;
};

const findWordTrie = (
  words: Array<string>,
  sentance: string
): Array<string> => {
  let result: Array<string> = new Array<string>();

  // * a) Use a Trie. Store the list of words as one trie (similar to pangram prob)
  // * use the target sentance string to greedily search into the trie constructing biggest word posible
  // * Once valid word is found, add it to list, continue from where we were in sentance, stop when sentance over.

  let trie: Trie = new Trie(words);
  let currWord: string = "";
  for (let i = 0; i < sentance.length; i++) {
    currWord += sentance[i];
    let possibleWords: Array<string> = trie.getPrefix(currWord);

    // * Optimization (if there is only one option, take that word and greedily skip ahead)
    if (possibleWords.length == 1) {
      let chosenWord = possibleWords[0];
      result.push(chosenWord);
      i += chosenWord.length - currWord.length;
      currWord = "";
    }
  }
  return result;
};

const findWordObject = (
  words: Array<string>,
  sentance: string
): Array<string> => {
  let result: Array<string> = new Array<string>();

  // * b) Put the words into an object for faster named lookup. Start with first character and check if that string
  // * is in the object. If not, keep creating larger word from sentence until we find a match, use that word put in list
  // * and continue to check the object and add characters.

  let dictionary: object = {};
  words.forEach((word: string) => {
    dictionary[word] = true;
  });

  let currWord: string = "";
  for (let i = 0; i < sentance.length; i++) {
    currWord += sentance[i];
    if (dictionary[currWord]) {
      result.push(currWord);
      currWord = "";
    }
  }

  return result;
};

const testWordFinder = (): void => {
  const testWords1: Array<string> = ["quick", "brown", "the", "fox"];
  const targetWord1: string = "thequickbrownfox";
  const expectedResult1: Array<string> = ["the", "quick", "brown", "fox"];
  const result1: Array<string> = findWordObject(testWords1, targetWord1);
  const result1Trie: Array<string> = findWordTrie(testWords1, targetWord1);
  passedTest(expectedResult1, result1);
  passedTest(expectedResult1, result1Trie);

  const testWords2: Array<string> = ["bed", "bath", "bedbath", "and", "beyond"];
  const targetWord2: string = "bedbathandbeyond";
  const expectedResult2: Array<string> = ["bed", "bath", "and", "beyond"];
  const expectedResult2Alt: Array<string> = ["bedbath", "and", "beyond"];
  const result2: Array<string> = findWordObject(testWords2, targetWord2);
  const result2Trie: Array<string> = findWordTrie(testWords2, targetWord2);
  passedTest(expectedResult2, result2);
  passedTest(expectedResult2Alt, result2Trie);
};

testWordFinder();
