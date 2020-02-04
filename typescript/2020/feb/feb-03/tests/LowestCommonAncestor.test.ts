import { expect } from "chai";
import BinaryTree from "./../src/BinaryTree";
import { lowestCommonAncestor } from "../src/LowestCommonAncestor";

describe("Lowest Common Ancestor", function() {
  var tree: BinaryTree<number>;
  var left: BinaryTree<number>;
  var right: BinaryTree<number>;
  var left_left: BinaryTree<number>;
  var left_right: BinaryTree<number>;
  var right_left: BinaryTree<number>;
  var right_right: BinaryTree<number>;
  
  this.beforeEach(function() {
    tree = new BinaryTree<number>(5);
    left = tree.addLeftChild(3);
    right = tree.addRightChild(7);
    left_left = left.addLeftChild(1);
    left_right = left.addRightChild(4);
    right_left = right.addLeftChild(6);
    right_right = right.addRightChild(8);
  });

  it("Binary tree works as expected", function() {
    expect(tree).to.not.be.null;
  });

  it("Subtree checker works", function() {
    let result = tree.containsSubTree(left);
    expect(result).to.be.true;
  })

  xit("Lowest Common Ancestor of 1 and 4 should be 3", function() {
    let result = lowestCommonAncestor(tree, left_left, left_right);
    expect(result.getValue()).to.eql(left.getValue());
  });

  xit("Lowest Common Ancestor of 1 and 8 should be 5", function() {
    let result = lowestCommonAncestor(tree, left_left, right_right);
    expect(result.getValue()).to.eql(tree.getValue());
  });




});
