// *  Daily Coding Problem Dec 2nd 2019

// * [Medium] -- Amazon

// * Max Sub Array
// * Given an array of integers, (positive or negative) return the sub-array with max sum.

// ! Ex: maxSubArray( [34, -50, 42, 14, -5, 86] ) => [42, 14, -5, 85] sum =  136
// ! Ex: maxSubArray( [-5, -1, -8, -9] ) => [] sum = 0

// * Finds the max subArray of an array of integers in O(N) time
const maxSubArray = (numbers: Array<number>): Array<number> => {
  let bestSubArray: Array<number> = new Array<number>();
  let bestSum: number = 0;

  numbers.forEach((num: number, index: number) => {
    // * The new sum if we are to include the next num in our bestSubArray
    let potentialSum: number = bestSum + num;

    // * If we encounter a value that puts us in the negative then reset bestSubArray and sum
    if (potentialSum < 0) {
      bestSum = 0;
      bestSubArray = [];
    } else {
      bestSum += num;
      bestSubArray.push(num);
    }
  });

  // * bestSum could also be returned depending on what is needed
  return bestSubArray; // * Or return [ bestSubArray, bestSum]
};

const sum = (nums: Array<number>): number => {
  return nums.reduce((prev: number, acc: number) => prev + acc, 0);
};

const testMaxSubArray = (): void => {
  let input1: Array<number> = [34, -50, 42, 14, -5, 86];
  let input2: Array<number> = [-5, -1, -8, -9];

  let expected1: Array<number> = [42, 14, -5, 86];
  let expected2: Array<number> = [];

  let result1: Array<number> = maxSubArray(input1);
  let result2: Array<number> = maxSubArray(input2);

  let expectedSum1: number = sum(expected1);
  let expectedSum2: number = sum(expected2);

  let resultSum1: number = sum(result1);
  let resultSum2: number = sum(result2);

  console.log(
    resultSum1 === expectedSum1
      ? "Passed sum: " + resultSum1
      : "Failed! Expected: " + expectedSum1 + " but got: ",
    resultSum1
  );
  console.log(
    resultSum2 === expectedSum2
      ? "Passed sum: " + resultSum2
      : "Failed! Expected: " + expectedSum2 + " but got: ",
    resultSum2
  );
};

testMaxSubArray();
