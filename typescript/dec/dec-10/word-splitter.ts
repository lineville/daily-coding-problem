// * Daily Coding Problem Dec 10th 2019

/**
 * *  Given a string s and an integer k, break up the string into multiple lines
 * *  such that each line has a length of k or less. You must break it up so that
 * *  words don't break across lines. Each line has to have the maximum possible
 * *  amount of words. If there's no way to break the text up, then return null.
 */

const wordSplitter = (input: string, limit: number): Array<string> | null => {
  let result: Array<string> | null = null;
  // * Do the splitting logic

  return result;
};


const arrayEquals = (arr1 : Array<string>, arr2 : Array<string>) : boolean => {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;

    let result : boolean = true;
    arr1.forEach(function (str : string, idx: number) {
        if (arr2[idx] !== str) {
            result = false;
        }
    });
    return result;
}

const testWordSplitter = (): void => {
  const input1: string = "the quick brown fox jumps over the lazy dog";
  const limit1: number = 10;
  const result1 : Array<string> | null = wordSplitter(input1, limit1);
  let expectedResult1 : Array<string> = ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
  let expectedResult2 : Array<string> = ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
  let passed : boolean = arrayEquals(result1, expectedResult1);
  let mustBe : boolean = arrayEquals(expectedResult1, expectedResult2);
  console.log(mustBe);
  console.log(passed ? "Passed" : "Failed")
};

testWordSplitter()
