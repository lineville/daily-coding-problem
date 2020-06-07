// * Daily Coding Problem June 9th 2020

// * Uber -- [Medium]

// * One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.

// * For a pattern to be valid, it must satisfy the following:

// * All of its keys must be distinct.
// * It must not connect two keys by jumping over a third key, unless that key has already been used.
// * For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.
// *
// * Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.

export const generateValidPasswords = (size: number): number => {
  const permutations = k_combinations([1, 2, 3, 4, 5, 6, 7, 8, 9], size);
  const validPermutations = permutations.filter(
    (p) => p.length === size && isValidPassword(p)
  );
  return validPermutations.length;
};

export const isValidPassword = (password: number[]): boolean => {
  let usedDigits = new Map<number, boolean>();

  let previousDigit = password[0];
  usedDigits.set(previousDigit, true);

  for (const digit of password.slice(1)) {
    // * If we have already seen this digit then invalid
    if (usedDigits.has(digit)) {
      return false;
    }

    // * If this is attempting a skip then we need to check that if
    // * the number being jumped over has been visited.
    if (
      isJump(previousDigit, digit) &&
      !usedDigits.has(skippedDigit(previousDigit, digit))
    ) {
      return false;
    }

    previousDigit = digit;
    usedDigits.set(digit, true);
  }
  return true;
};

const skippedDigit = (previousDigit: number, digit: number): number => {
  switch (previousDigit) {
    case 1:
      return digit === 7 ? 4 : digit === 9 ? 5 : 2;

    case 3:
      return digit === 1 ? 2 : digit === 7 ? 5 : 6;

    case 7:
      return digit === 1 ? 4 : digit === 3 ? 5 : 8;

    case 9:
      return digit === 7 ? 8 : digit === 1 ? 5 : 6;

    default:
      return 5;
  }
};

const isJump = (prev: number, current: number): boolean => {
  switch (prev) {
    case 1:
      return [3, 7, 9].includes(current);

    case 2:
      return current === 8;

    case 3:
      return [1, 7, 9].includes(current);

    case 4:
      return current === 6;

    case 5:
      return false;

    case 6:
      return current === 4;

    case 7:
      return [1, 3, 9].includes(current);

    case 8:
      return current === 2;

    case 9:
      return [1, 3, 7].includes(current);

    default:
      return false;
  }
};

export const k_combinations = <T>(set: T[], k: number) => {
  if (k > set.length || k <= 0) {
    return [];
  }

  if (k === set.length) {
    return [set];
  }

  if (k === 1) {
    return set.reduce((acc, cur) => [...acc, [cur]], [] as T[][]);
  }

  const combs = [] as T[][];
  let tail_combs = [];

  for (let i = 0; i <= set.length - k + 1; i++) {
    tail_combs = k_combinations(set.slice(i + 1), k - 1);
    for (let j = 0; j < tail_combs.length; j++) {
      combs.push([set[i], ...tail_combs[j]]);
    }
  }

  return combs;
};

export const combinations = <T>(set: T[]) => {
  return set.reduce(
    (acc, _cur, idx) => [...acc, ...k_combinations(set, idx + 1)],
    [] as T[][]
  );
};
