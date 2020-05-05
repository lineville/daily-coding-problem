import { expect } from "chai";
import { countNodes, BinaryTree } from "../src/CompleteTreeCount";

describe("Count Complete Tree Node", () => {
  it("should return 1", () => {
    const tree = new BinaryTree(1);
    expect(countNodes(tree)).to.equal(1);
  });

  it("should return 3", () => {
    const tree = new BinaryTree(3);
    tree.left = new BinaryTree(2);
    tree.right = new BinaryTree(4);
    expect(countNodes(tree)).to.equal(3);
  });

  it("should return 7", () => {
    const tree = new BinaryTree(5);
    tree.left = new BinaryTree(3);
    tree.left.left = new BinaryTree(1);
    tree.left.right = new BinaryTree(4);
    tree.right = new BinaryTree(7);
    tree.right.left = new BinaryTree(6);
    tree.right.right = new BinaryTree(9);
    expect(countNodes(tree)).to.equal(7);
  });
});
