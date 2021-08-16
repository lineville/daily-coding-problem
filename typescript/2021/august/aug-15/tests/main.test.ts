import { expect } from 'chai'
import { findMaxSum, BinaryTreeNode } from '../src/main'

describe('findMaxSum', () => {
  it('should find max sum in tree', () => {
    let tree = new BinaryTreeNode(10);
    tree.left = new BinaryTreeNode(2)
    tree.right = new BinaryTreeNode(10)
    tree.left.left = new BinaryTreeNode(20)
    tree.left.right = new BinaryTreeNode(1)
    tree.right.right = new BinaryTreeNode(-25)
    tree.right.right.left = new BinaryTreeNode(3)
    tree.right.right.right = new BinaryTreeNode(4)
    expect(findMaxSum(tree)).to.equal(42)
  })
})
