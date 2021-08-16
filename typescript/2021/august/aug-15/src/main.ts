// * Daily Coding Problem August 15 2021

// * [Easy] -- Google

// Given a binary tree of integers, find the maximum path sum between two nodes.
// The path must go through at least one node, and does not need to go through the root.

export class BinaryTreeNode {
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null
  data: number

  constructor(value: number) {
    this.left = null
    this.right = null
    this.data = value
  }
}

let val : number;

// This function returns overall maximum path sum in 'res'
// And returns max path sum going through root.
function findMaxUtil(node: BinaryTreeNode | null): number {
  // Base Case
  if (node == null) return 0

  // l and r store maximum path sum going through left and
  // right child of root respectively
  let l = findMaxUtil(node.left)
  let r = findMaxUtil(node.right)

  // Max path for parent call of root. This path must
  // include at-most one child of root
  let max_single = Math.max(Math.max(l, r) + node.data, node.data)

  // Max Top represents the sum when the Node under
  // consideration is the root of the maxsum path and no
  // ancestors of root are there in max sum path
  let max_top = Math.max(max_single, l + r + node.data)

  // Store the Maximum Result.
  val = Math.max(val, max_top)

  return max_single
}

// Returns maximum path sum in tree with given root
export function findMaxSum(node: BinaryTreeNode) {
  val = Number.MIN_VALUE;
  findMaxUtil(node);
  return val;
}
