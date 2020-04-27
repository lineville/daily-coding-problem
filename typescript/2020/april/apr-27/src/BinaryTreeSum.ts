// * Daily Coding Problem April 27th 2020

// * [Easy] -- Apple

// * Given the root of a binary tree, find the most frequent subtree sum.
// * The subtree sum of a node is the sum of all values under a node, including the node itself.

// *        5
// *      /  \
// *     2   -5
// * Will return 2 since it occurs twice (the sum of the entire tree and the left subtree) whereas
// * -5 only appears once as the sum of right subtree

type BinaryTree = {
  value: number;
  leftSubTree: BinaryTree | null;
  rightSubTree: BinaryTree | null;
};

export const sum = (tree: BinaryTree): number => {
  let result = tree.value;

  if (tree.leftSubTree !== null) {
    result += sum(tree.leftSubTree);
  }

  if (tree.rightSubTree !== null) {
    result += sum(tree.rightSubTree);
  }
  return result;
};

export const mostCommonSum = (tree: BinaryTree): number => {
  let sums = treeToSumArray(tree);
  let sumCounts = new Map<number, number>();

  sums.forEach((sum: number) => {
    sumCounts.set(sum, (sumCounts.get(sum) || 0) + 1);
  });

  let mostOccurences = 0;
  let mostFrequentSum = sums[0];
  for (const [sum, count] of sumCounts) {
    if (count > mostOccurences) {
      mostOccurences = count;
      mostFrequentSum = sum;
    }
  }

  return mostFrequentSum;
};

export const treeToSumArray = (tree: BinaryTree): number[] => {
  if (tree.leftSubTree !== null && tree.rightSubTree !== null) {
    return [
      sum(tree),
      ...treeToSumArray(tree.leftSubTree),
      ...treeToSumArray(tree.rightSubTree),
    ];
  }

  if (tree.leftSubTree !== null) {
    return [sum(tree), ...treeToSumArray(tree.leftSubTree)];
  }

  if (tree.rightSubTree !== null) {
    return [sum(tree), ...treeToSumArray(tree.rightSubTree)];
  }

  return [sum(tree)];
};
