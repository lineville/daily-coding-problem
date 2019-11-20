// * Daily Coding Problem

// * Nov 18 2019

/**
 * * Given an array of strictly the characters 'R', 'G', and 'B',
 * * segregate the values of the array so that all the Rs come first,
 * * the Gs come second, and the Bs come last.
 * * You can only swap elements of the array.
 *
 * ! Do this in linear time O(N) and in place (no using extra data structures)
 *
 * * Ex: ['G', 'B', 'R', 'R', 'B', 'R', 'G'] => ['R', 'R', 'R', 'G', 'G', 'B', 'B']
 */

const { didTestPass, arrayEquals } = require("simple-unit-test-utility");

const triSort = (arr: Array<string>) => {
  // All R's ... all G's ... all B's
  let rIndex: number = 0;
  let gIndex: number = 0;
  let bIndex: number = arr.length - 1;

  while (gIndex <= bIndex) {
    switch (arr[gIndex]) {
      case "R":
        swapLetters(arr, rIndex, gIndex);
        rIndex++;
        gIndex++;
        break;

      case "G":
        gIndex++;
        break;

      case "B":
        swapLetters(arr, gIndex, bIndex);
        bIndex--;
        break;

      default:
        break;
    }
    console.log(arr);
  }

  return arr;
};

const swapLetters = (arr: Array<string>, i: number, j: number): void => {
  let temp: string = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const testTriSort = (): void => {
  const input1: Array<string> = ["G", "B", "R", "R", "B", "R", "G"];
  const expectedResult1: Array<string> = ["R", "R", "R", "G", "G", "B", "B"];
  const result = triSort(input1);
  didTestPass(expectedResult1, result);
};

testTriSort();
