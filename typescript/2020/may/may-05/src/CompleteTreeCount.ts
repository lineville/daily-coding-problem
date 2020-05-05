// * Daily Coding Problem May 5th 2020

// * [Easy] -- Amazon

// * Given a complete binary tree, count the number of nodes in faster than O(n) time.
// * Recall that a complete binary tree has every level filled except the last,
// * and the nodes in the last level are filled starting from the left.
// * Time: O(log(n)^2)
// * Space: O(h)

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const countNodes = (root: BinaryTree | null): number => {
  if (root === null) {
    return 0;
  }

  let leftCount = leftDepth(root.left);
  let rightCount = leftDepth(root.right);

  if (leftCount === rightCount) {
    return (1 << leftCount) + countNodes(root.right);
  } else {
    return countNodes(root.left) + (1 << rightCount);
  }
};

const leftDepth = (root: BinaryTree | null): number => {
  let result = 0;

  while (root !== null) {
    result++;
    root = root.left;
  }
  return result;
};
