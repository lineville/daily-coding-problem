// * Daily Coding Problem Jan 3rd 2020

// * [Easy] -- Yelp

// * Given the classical T9 phone mapping of numbers to a set of letters
// * And a digit string (like a phone number), return an array that contains all
// * possible combos of words that could come from that number string.

// ! Ex: “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

// * Mapping of numbers to the set of letters classic T9 style.


const mapping : { [n: number]: Array<string> } = {
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
export const phoneMapping = (digits: string): Array<string> => {
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
