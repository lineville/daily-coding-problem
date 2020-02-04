import { expect } from "chai";
import BinaryTree, { Node } from "../src/LowestCommonAncestor";

describe("Lowest Common Ancestor", function() {
  var tree: BinaryTree<number>;

  this.beforeEach(function() {
    tree = new BinaryTree<number>(3);
    tree.root.left = new Node(5);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(2);
    tree.root.left.right.left = new Node(7);
    tree.root.left.right.right = new Node(4);
    tree.root.right = new Node(1);
    tree.root.right.left = new Node(0);
    tree.root.right.right = new Node(8);
  });

  it("Binary tree works as expected", function() {
    expect(tree).to.not.be.null;
  });

  it("Lowest Common Ancestor of 5 and 1 should be 3", function() {
    const result = tree.findLowestCommonAncestor(5, 1);
    expect(result?.value).to.eql(3);
  });

  it("Lowest Common Ancestor of 5 and 4 should be 5", function() {
    const result = tree.findLowestCommonAncestor(5, 4);
    expect(result?.value).to.eql(5);
  });

  it("Lowest Common Ancestor of 6 and 4 should be 5", function() {
    const result = tree.findLowestCommonAncestor(6, 4);
    expect(result?.value).to.eql(5);
  });
});
