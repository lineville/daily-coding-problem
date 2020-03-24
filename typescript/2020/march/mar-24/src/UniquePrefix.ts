// * Daily Coding Problem March 24th 2020

// *****************************************

// * [Medium] -- Square

// * Given a list of words, return the shortest unique prefix of each word.

// ! Ex: ['dog', 'cat', 'apple', 'apricot', 'fish'] => ['d', 'c', 'app', 'apr', 'f']
// ! Ex: ['dog', 'cat', 'apple', 'apricot', 'fish', 'application'] => ['d', 'c', 'apple', 'apr', 'f', 'appli']

export const uniquePrefixes = (words: Array<string>): Array<string> => {
  let result: Array<string> = [];

  words.forEach((word: string, idx: number) => {
    // * Get any words after the current word that have any sharedPrefix with current word
    let matchesAfterCurrent = words
      .slice(idx + 1)
      .filter(other => sharePrefix(word, other));

    // * Get any prefixes we have added already that have any sharedPrefix with curent word
    // * and join that with matchesAfterCurrent to get all potential conflicts with current word
    let potentialConflicts = [
      ...matchesAfterCurrent,
      ...result.filter(other => sharePrefix(word, other))
    ];

    // * Push on the longestPrefix that was needed to be unique, or just first character if no conflicts
    result.push(
      potentialConflicts.length === 0
        ? word[0]
        : longestNeededToBeUnique(word, potentialConflicts)
    );
  });

  return result;
};

export const sharePrefix = (word: string, other: string): boolean => {
  let idx = 0;
  while (idx < word.length && idx < other.length) {
    if (word[idx] === other[idx]) return true;
    idx++;
  }
  return false;
};

// * Expects this to only be called if the two words have at least some common prefix
export const longestNeededToBeUnique = (
  word: string,
  others: Array<string>
): string => {
  let prefixes: Array<string> = others.map((other: string) =>
    shortestPrefixNeeded(word, other)
  );
  return prefixes.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
};

export const shortestPrefixNeeded = (word: string, other: string): string => {
  let idx = 0;
  while (idx < word.length && idx < other.length) {
    if (word[idx] !== other[idx]) {
      return word.slice(0, idx + 1);
    }
    idx++;
  }
  return word;
};
