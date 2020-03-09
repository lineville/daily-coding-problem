import { expect } from "chai";
import { flip, pancakeSort } from "../src/PancakeSort";

describe("flip from i to j", () => {
  it("should flip from index 2 to 5 and reverse", () => {
    const result = flip([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5);
    expect(result).to.deep.equal([5,4,3,2]);
  });
});

describe("pancake sort", () => {
  it("should sort using reverseList", () => {
    const result = pancakeSort([9, 8, 10, 4, 6, 1, 2, 12]);
    expect(result).to.deep.equal([1, 2, 4, 6, 8, 9, 10, 12]);
  });
});
