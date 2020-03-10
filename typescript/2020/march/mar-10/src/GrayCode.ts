// * Daily Coding Problem March 10th 2020

// * [Medium] -- Apple

// * Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around.

// * Gray code is common in hardware so that we don't see temporary spurious values during transitions.

// * Given a number of bits n, generate a possible gray code for it.
// ! Ex: 1 => [0, 1].
// ! Ex: 2 => [00, 01, 11, 10].
// ! Ex: 3 => [000, 001, 011, 111, 110, 100].
// ! Ex: 4 => [0000, 0001, 0011, 0111, 1111, 1110, 1100, 1000].

// * N is expected to be greater than or equal to 1 since it is an n-bit algorithm
export const grayCode = (n: number): string[] => {
  let currentCode = new Array<string>(n).fill("0").join("");
  let lastZeroIdx = n - 1;
  let result = new Array<string>();

  while (currentCode.includes("0")) {
    result.push(currentCode);
    currentCode = replaceCharAt(currentCode, lastZeroIdx, "1");
    lastZeroIdx--;
  }

  for (let i = n - 1; i >= 0; i--) {
    result.push(currentCode);
    currentCode = replaceCharAt(currentCode, i, "0");
  }

  return result;
};

// * Returns a copy of str with the character at idx replaced with char
export const replaceCharAt = (str: string, idx: number, char: string): string => {
  return str.substring(0, idx) + char + str.substring(idx + 1);
};
