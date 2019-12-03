// * Daily Coding Problem Dec 3rd 2019

// * [Easy] -- Microsoft

// * Given the root to a Binary tree that represents an arithmetic expression, evaluate it.

// ! Ex: root to this tree

/*
 *         *
 *        / \
 *      +    +
 *     / \  / \
 *    3  2  4  5
 */

// * turns into  (3 + 2) * (4 + 5) => (5) * (9) => 45.


class BinaryTree<T> {
  value: T;
  leftChild: BinaryTree<T> | null;
  rightChild: BinaryTree<T> | null;
  parent: BinaryTree<T> | null;

  // * Will only be constructed from the root down. This will only
  // * be called to create the root, then child nodes are appended.
  constructor(val : T) {
    
  }
}
