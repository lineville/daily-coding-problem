// * Daily Coding Problem March 17 2020

// ******************************************

// * [Medium] -- MongoDB

// * Given a list of elements, find the majority element,
// * which appears more than half the time (> floor(len(lst) / 2.0)).

// * Assume that the majority element exists

export const majorityElement = (nums: Array<number>): number => {
  const occurences = new Map<number, number>();
  nums.forEach((num: number) => {
    occurences.set(num, (occurences.get(num) || 0) + 1);
  });

  let mostOccurences = 0;
  let majority = 0;
  for (let [num, val] of occurences.entries()) {
    if (val > mostOccurences) {
      mostOccurences = val;
      majority = num;
    }
  }
  return majority;
};
