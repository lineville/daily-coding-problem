// * Daily Coding Problem May 29th 2020

// * [Medium] -- Twitter

// * Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer.
// ! Ex: [10, 7, 76, 415] --> 77641510

// * We just need to sort these numbers using built in sort method but provide our own new compare function.
// * Our compare function will compare the numeric of AB against BA, which will end up with order of greatest value.
export const largestNumber = (nums: Array<number>): number => {
  const ordered = nums.sort(
    (a, b) => parseInt(`${b}${a}`, 10) - parseInt(`${a}${b}`, 10)
  );
  return parseInt(ordered.join(""), 10);
};
