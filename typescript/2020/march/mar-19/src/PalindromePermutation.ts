// * Daily Coding Problem March 19 2020

// ********************************

// * [Easy] -- Amazon

// * Given a string, determine whether any permutation of it is a palindrome.

// ! Ex: carrace => true because carrace is permutation of racecar which is palindrome.
// ! Ex: daily => false becase no permutation of daily is a palindrome

// * For a word to be a permutation of a palindrome every letter must appear an even number of times,
// * except for potentially the middle number.

// * 1) Create a map of the occurences of each letter (ignoring whitespace so we can handle sentences)
// * 2) Find how many entries in the map occur an odd number of times.
// * 3) If there are any more than one letter that occurs an odd number of times then return false, otherwise true.

export const isPermutationPalindrome = (word: string): boolean => {
  const occurrences = new Map<string, number>();

  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    if (letter === " ") continue;
    occurrences.set(letter, (occurrences.get(letter) || 0) + 1);
  }

  let oddOccurrence = 0;
  for (const occurrence of occurrences.values()) {
    if (occurrence % 2 !== 0) {
      oddOccurrence++;
    }
  }

  return oddOccurrence < 2;
};
