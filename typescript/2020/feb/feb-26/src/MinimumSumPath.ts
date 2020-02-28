// * Daily Coding Problem

// * [Easy] -- Apple

/**
 * * Given a binary tree, find a minimum path sum from root to a leaf.

 * ! Ex:  the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

 *          10
 *         / \ 
 *        5   5
 *       /     \
 *      2       1
 *               \ 
 *                -1            
 */

// * One path sum is 17 the other is 15 so we return the path [10, 5, 1, -1]

export default function minimumSum(root: Node<number>): Array<number> {
  let result: Array<number> = new Array<number>();
  // * Traverse the tree and find the path that has the smallest sum
  

  return result;
}

export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft = (value: T): void => {
    this.left = new Node(value);
  }

  addRight = (value: T): void => {
    this.right = new Node(value);
  }
}
