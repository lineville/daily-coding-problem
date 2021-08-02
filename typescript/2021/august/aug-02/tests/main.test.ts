import { expect } from 'chai'
import { isBinarySearchTree, TreeNode } from '../src/main'

describe('isBinarySearchTree', () => {
  it('should return true', () => {
    let tree = new TreeNode(7, 
      new TreeNode(5,
        new TreeNode(3,
          new TreeNode(1, null, null), new TreeNode(4, null, null)),
        new TreeNode(8,
          new TreeNode(6, null, null), new TreeNode(9, null, null))),
      new TreeNode(10,
        null, new TreeNode(12, null, null)));
    expect(isBinarySearchTree(tree)).to.be.true
  })

    it('should return false', () => {
      let tree = new TreeNode(
        7,
        new TreeNode(
          5,
          new TreeNode(
            3,
            new TreeNode(1, null, null),
            new TreeNode(4, null, null)
          ),
          new TreeNode(
            6,
            new TreeNode(7, null, null),
            new TreeNode(8, null, null)
          )
        ),
        new TreeNode(9, 
          new TreeNode(10, null, null), 
          new TreeNode(12, null, null))
      )
      expect(isBinarySearchTree(tree)).to.be.false
    })
})
