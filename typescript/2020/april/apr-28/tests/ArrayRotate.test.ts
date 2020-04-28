import { expect } from "chai";
import { rotateArray } from "../src/ArrayRotate";

describe("ArrayRotate", () => {
  it("should return array rotated 4 places", () => {
    const result = rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    expect(result).to.deep.equal([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
  });

  it("should return array rotated 0 places", () => {
    const result = rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return array rotated 2 places", () => {
    const result = rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(result).to.deep.equal([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
