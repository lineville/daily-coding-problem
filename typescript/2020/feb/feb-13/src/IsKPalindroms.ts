// * Daily Coding Problem Feb 13 2020

// * Given a string which we can delete at most k, return whether you can make a palindrome.

// ! Ex: abcdecba, k = 1-> true
// ! Ex: abcdeca, k = 2 -> true
// ! Ex: acdcb, k = 1 -> false
// ! Ex: waterrfetawx, k = 2 -> true
// ! Ex: waterrfetawx, k = 1 -> false

export default function isKPalindrome(word: string, k: number): boolean {

  const reversed = word
    .split("")
    .reverse()
    .join("");
  
    return (
    isKPalindromeRecursive(word, reversed, word.length, word.length) <= k * 2
  );
}

const isKPalindromeRecursive = (
  word1: string,
  word2: string,
  idx1: number,
  idx2: number
): number => {
  if (idx1 === 0) {
    return idx2;
  }

  if (idx2 === 0) {
    return idx1;
  }

  if (word1[idx1 - 1] === word2[idx2 - 1]) {
    return isKPalindromeRecursive(word1, word2, idx1 - 1, idx2 - 1);
  }

  return (
    1 +
    Math.min(
      isKPalindromeRecursive(word1, word2, idx1 - 1, idx2),
      isKPalindromeRecursive(word1, word2, idx1, idx2 - 1)
    )
  );
};
