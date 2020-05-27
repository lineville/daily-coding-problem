// * Daily Coding Problem May 26 2020

// * [Easy] -- Bloomberg

// * There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person,
// * and removing every successive kth person going clockwise until there is no one left.

// * Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

// ! Ex: if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

// * Bonus: Find an O(log N) solution if k = 2.

export const positionToSurvive = (prisoners: number, k: number): number => {
  // * Base case: 1 prisoner so optimal position is the only spot 1.
  if (prisoners === 1) {
    return 1;
  }

  // * Recursive case: Take the optimal position with one less prisoner
  // * and that to k - 1 before wrapping with % prisoners length and last, adding 1 to offset the 0 index.
  return ((positionToSurvive(prisoners - 1, k) + (k - 1)) % prisoners) + 1;
};

export const positionToSurviveV2 = (prisoners: number, k: number): number => {
  return 0;
};
