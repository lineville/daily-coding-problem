import { expect } from "chai";
import minimumSumPath, { Node } from "../src/MinimumSumPath";

describe("Minimum Sum Path", function() {
  it("Basic two path example", function() {
    const tree: Node<number> = new Node<number>(10);
    tree.addLeft(5);
    tree.left?.addLeft(2);
    tree.addRight(5);
    tree.right?.addRight(1);
    tree.right?.right?.addRight(-1);
    console.log(tree);

    const result: Array<number> = minimumSumPath(tree);
    const expectedResult : Array<number> = [10, 5, 1, -1];
    expect(result).to.deep.equal(expectedResult);
  });
});
