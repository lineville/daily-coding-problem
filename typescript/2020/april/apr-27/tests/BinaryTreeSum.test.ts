import { expect } from "chai";
import { sum, mostCommonSum, treeToSumArray } from "../src/BinaryTreeSum";

describe("BinaryTree Sum", () => {
  it("should return 2", () => {
    const result = sum({ value: 2, leftSubTree: null, rightSubTree: null });
    expect(result).to.equal(2);
  });

  it("should return -5", () => {
    const result = sum({ value: -5, leftSubTree: null, rightSubTree: null });
    expect(result).to.equal(-5);
  });

  it("should return 2", () => {
    const result = sum({
      value: 5,
      leftSubTree: { value: 2, leftSubTree: null, rightSubTree: null },
      rightSubTree: { value: -5, leftSubTree: null, rightSubTree: null },
    });
    expect(result).to.equal(2);
  });

  it("should return convert tree to flat array of sums", () => {
    const result = treeToSumArray({
      value: 5,
      leftSubTree: { value: 2, leftSubTree: null, rightSubTree: null },
      rightSubTree: { value: -5, leftSubTree: null, rightSubTree: null },
    });
    expect(result).to.deep.equal([2, 2, -5]);
  });
});

describe("MostCommon Sum", () => {
  it("should return 2", () => {
    const result = mostCommonSum({
      value: 5,
      leftSubTree: { value: 2, leftSubTree: null, rightSubTree: null },
      rightSubTree: { value: -5, leftSubTree: null, rightSubTree: null },
    });
    expect(result).to.equal(2);
  });
});
