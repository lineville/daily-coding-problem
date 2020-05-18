// * Daily Coding Problem May 6th 2020

// * [Easy] -- IBM

// * Given an integer, find the next permutation of it in absolute order.

// ! Ex: 48975 -> 49578

export const nextGreatesPermuation = (n: number): number => {
  let digits = n
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10));

  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      let digitsAfterPivot = digits.slice(i + 1);

      let minIndex = i + 1 +
        indexOfSmallestValueGreaterThanN(digits[i], digitsAfterPivot);

      digits = swap(digits, i, minIndex);

      digitsAfterPivot = digits
        .slice(i + 1)
        .sort((a: number, b: number) => a - b);

      digits = [...digits.slice(0, i + 1), ...digitsAfterPivot];

      return parseInt(digits.join(""), 10);
    }
  }

  throw new Error("There is no larger permutation of " + n.toString());
};

const swap = (nums: Array<number>, i: number, j: number): Array<number> => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
};

const indexOfSmallestValueGreaterThanN = (
  n: number,
  nums: number[],
): number => {
  let minIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > n && nums[i] < nums[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
};

console.log(nextGreatesPermuation(48975));
