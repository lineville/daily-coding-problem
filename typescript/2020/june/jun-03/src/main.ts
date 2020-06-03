// * Daily Coding Problem June 3rd 2020

// * [Easy] -- Apple

// * Given a positive integer n, returns the nth fiboncacci number
// * Space Complexity: O(1)

export const nthFibonacci = (n: number): number => {
  return n < 3 ? n - 1 : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
