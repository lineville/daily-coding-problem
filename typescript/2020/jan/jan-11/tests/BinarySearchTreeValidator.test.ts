import { expect } from 'chai'
import BinaryTree from '../src/BinarySearchTreeValidator'

describe('Binary Search Tree Validator', function() {
  it('isValid : valid', function() {
    let tree = new BinaryTree(5)
    tree.addLeft(3)
    tree.left?.addLeft(1)
    tree.left?.addRight(4)
    tree.addRight(7)
    tree.right?.addLeft(6)
    tree.right?.addRight(9)
    let result = tree.isBinarySearchTree(tree)
    expect(result).be.true
  })

  it('isValid : invalid', function() {
    let tree = new BinaryTree(5)
    tree.addLeft(3)
    tree.left?.addLeft(12)
    tree.left?.addRight(4)
    tree.addRight(7)
    tree.right?.addLeft(6)
    tree.right?.addRight(9)
    let result = tree.isBinarySearchTree(tree)
    expect(result).be.false
  })
})
