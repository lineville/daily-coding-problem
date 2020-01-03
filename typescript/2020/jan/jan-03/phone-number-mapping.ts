// * Daily Coding Problem Jan 3rd 2020

// * [Easy] -- Yelp

// * Given the classical T9 phone mapping of numbers to a set of letters
// * And a digit string (like a phone number), return an array that contains all
// * possible combos of words that could come from that number string.

// ! Ex: “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

// * Import my helper utility to check if arrays are equal (for testing)
const { arrayEquals } = require("simple-unit-test-utility");

// * Mapping of numbers to the set of letters classic T9 style.
const mapping = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

// * Recursive solution, calls the helper and passes an empty array as the base combos
const phoneMapping = (digits: string): Array<string> => {
  return phoneMappingHelper(digits, []);
};

// * Recursive helper that takes in the existing combinations so far, and generates the new
// * combinations by using the first digit from the digit string. Calls itself until the digit
// * string has been exhausted and returns all the combinations.
const phoneMappingHelper = (
  digits: string,
  prevCombos: Array<string>
): Array<string> => {
  // * Base case, we have an empty digit string
  if (digits.length == 0) {
    return prevCombos;
  }

  // * Create a new array of combinations, from this digits letter and previous combos
  let combinations: Array<string> = [];
  const digit: number = parseInt(digits[0]);
  const letters: Array<string> = mapping[digit];

  // * If this is the first one, just add the letters
  if (prevCombos.length === 0) {
    return phoneMappingHelper(digits.slice(1), letters);
  }

  // * Pair each new letter with each existing combo
  prevCombos.forEach((combo: string) => {
    letters.forEach((letter: string) => {
      combinations.push(combo + letter);
    });
  });
  return phoneMappingHelper(digits.slice(1), combinations);
};

const testPhoneMap = (): void => {
  // * TEST 1
  const input1: string = "23";
  const expected1: Array<string> = [
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
  ];
  const result1: Array<string> = phoneMapping(input1);
  const passed1 = arrayEquals(expected1, result1);
  console.log(passed1 ? "Passed" : "Failed. Got " + result1);

  // * TEST 2
  const input2: string = "2345";
  const expected2: Array<string> = [
    "adgj",
    "adgk",
    "adgl",
    "adhj",
    "adhk",
    "adhl",
    "adij",
    "adik",
    "adil",
    "aegj",
    "aegk",
    "aegl",
    "aehj",
    "aehk",
    "aehl",
    "aeij",
    "aeik",
    "aeil",
    "afgj",
    "afgk",
    "afgl",
    "afhj",
    "afhk",
    "afhl",
    "afij",
    "afik",
    "afil",
    "bdgj",
    "bdgk",
    "bdgl",
    "bdhj",
    "bdhk",
    "bdhl",
    "bdij",
    "bdik",
    "bdil",
    "begj",
    "begk",
    "begl",
    "behj",
    "behk",
    "behl",
    "beij",
    "beik",
    "beil",
    "bfgj",
    "bfgk",
    "bfgl",
    "bfhj",
    "bfhk",
    "bfhl",
    "bfij",
    "bfik",
    "bfil",
    "cdgj",
    "cdgk",
    "cdgl",
    "cdhj",
    "cdhk",
    "cdhl",
    "cdij",
    "cdik",
    "cdil",
    "cegj",
    "cegk",
    "cegl",
    "cehj",
    "cehk",
    "cehl",
    "ceij",
    "ceik",
    "ceil",
    "cfgj",
    "cfgk",
    "cfgl",
    "cfhj",
    "cfhk",
    "cfhl",
    "cfij",
    "cfik",
    "cfil"
  ];
  const result2: Array<string> = phoneMapping(input2);
  const passed2 = arrayEquals(expected2, result2);
  console.log(passed2 ? "Passed" : "Failed. Got " + result2);
};

// * Execute the test function
testPhoneMap();
