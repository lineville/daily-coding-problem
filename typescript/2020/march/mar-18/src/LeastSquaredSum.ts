// * Daily Coding Problem March 18th 2020

// *******************************************

// * Given a positive integer n, find the smallest number of squared integers which sum to n.

// ! Ex: n = 13, return 2 since 13 = 3^2 + 2^2 = 9 + 4.
// ! Ex: n = 27, return 3 since 27 = 3^2 + 3^2 + 3^2 = 9 + 9 + 9.

export const leastSquaredSum = (n: number): number => {
  if (n <= 3) {
    return n;
  }

  let minSquaresTable = new Array<number>(n + 1);

  for (let i = 0; i <= n; i++) {
    minSquaresTable[i] = i;

    if (i > 3) {
      for (let j = 1; j <= Math.ceil(Math.sqrt(i)); j++) {
        let square = j * j;
        if (square > i) {
          break;
        } else {
          minSquaresTable[i] = Math.min(
            minSquaresTable[i],
            1 + minSquaresTable[i - square]
          );
        }
      }
    }
  }
  return minSquaresTable[n];
};
