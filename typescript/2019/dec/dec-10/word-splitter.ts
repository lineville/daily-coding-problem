// * Daily Coding Problem Dec 10th 2019

/**
 * *  Given a string s and an integer k, break up the string into multiple lines
 * *  such that each line has a length of k or less. You must break it up so that
 * *  words don't break across lines. Each line has to have the maximum possible
 * *  amount of words. If there's no way to break the text up, then return null.
 */

const wordSplitter = (input: string, limit: number): Array<string> | null => {
  let allWords: Array<string> = input.split(" ");
  if (allWords.filter((val: string) => val.length > limit).length > 0) {
    // * There exists a word greater than limit so it will not be possible
    return null;
  }

  // * It is possible to split up the given input
  let result: Array<string> | null = [];
  let lineIndex: number = 0;
  let line: string = "";

  allWords.forEach(function(word: string) {
    let lengthIfAdded: number = lineIndex + word.length + 1;
    if (lengthIfAdded > limit) {
      lineIndex = 0;
      result.push(line);
      line = ""
    }

    line += lineIndex === 0 ? word : " " + word;
    lineIndex += word.length;
  });
  result.push(line);

  return result;
};

const arrayEquals = (arr1: Array<string>, arr2: Array<string>): boolean => {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;

  let result: boolean = true;
  arr1.forEach(function(str: string, idx: number) {
    if (arr2[idx] !== str) {
      result = false;
    }
  });
  return result;
};

const testWordSplitter = (): void => {
  const input1: string = "the quick brown fox jumps over the lazy dog";
  const limit1: number = 10;
  const result1: Array<string> | null = wordSplitter(input1, limit1);
  let expectedResult1: Array<string> = [
    "the quick",
    "brown fox",
    "jumps over",
    "the lazy",
    "dog"
  ];
  let passed: boolean = arrayEquals(result1, expectedResult1);
  console.log(result1);
  console.log(passed ? "Passed" : "Failed");

  const result2 : Array<string> | null = wordSplitter(input1, 2);
  console.log(result2 === null ? "Passed" : "Failed");
};

testWordSplitter();
