// * Daily Coding Problem August 2 2021

// [Medium] -- LinkedIn

// Determine whether a tree is a valid binary search tree.

// A binary search tree is a tree with two children, left and right,
// and satisfies the constraint that the key in the left child must be less than or equal to the root
// and the key in the right child must be greater than or equal to the root.

export class TreeNode {
  left: TreeNode | null
  right: TreeNode | null
  value: number

  constructor(value: number, left: TreeNode | null, right: TreeNode | null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Determine whether a tree is a valid binary search tree.
export function isBinarySearchTree(root: TreeNode | null): boolean {

    if (!root) {
        return true
    }

    if (root.left && root.right && (root.left.value > root.value || root.right.value < root.value)) {
        return false
    }
    return isBinarySearchTree(root.left) && isBinarySearchTree(root.right)
}
