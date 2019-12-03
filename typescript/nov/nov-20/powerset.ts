// * [Easy] Daily Coding Problem

// * Compute the powerset of a given set.

// ! Ex: powerset({1, 2, 3}) => { {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3} }
// ! Ex: powerset({1, 2, 3, 4}) => { {}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}, {2, 3, 4}, {1, 3, 4}, {1, 2, 4}, {1, 2, 3, 4} }

const { didTestPass, arrayEquals } = require("simple-unit-test-utility");

const testPowerset = (): void => {
  const input: Array<number> = [1, 2, 3];
  const expectedOutput: Array<Array<number>> = [
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3]
  ];
  const resultrec: Array<Array<number>> = powerset(input);
  const passedrec: boolean = deepArrayEquals(resultrec, expectedOutput);

  console.log(
    passedrec ? "Passed ✔️" : "Failed ❌"
  );
};

const deepArrayEquals = (
  arr1: Array<Array<number>>,
  arr2: Array<Array<number>>
): boolean => {
  if (arr1.length !== arr2.length) return false;

  for (let i: number = 0; i < arr1.length; i++) {
    if (!arrayEquals(arr1[i], arr2[i])) return false;
  }

  return true;
};


// * Recursive version will use array for simplicity and assume it is a Set (no duplicates)
const powerset = (set: Array<number>): Array<Array<number>> => {
  // * Base Case [] => [ [] ]
  if (set.length === 0) {
    return [[]];
  } else {
    // * Recursive case: [1, 2, 3] => insert 3 into the powerset of [1, 2]
    return insertIntoSubsets(
      powerset(set.slice(0, set.length - 1)),
      set.pop()
    );
  }
};

// * Inserts the element into each of the the subsets and concatenates the original subsets without the element
// * insertIntoSubsets([[], [a], [b]], c) => [[], [a], [b], [c], [a, c], [b, c]]
const insertIntoSubsets = (
  subsets: Array<Array<number>>,
  element: number
): Array<Array<number>> => {
  return subsets.concat(subsets.map(set => set.concat(element)));
};

testPowerset();
