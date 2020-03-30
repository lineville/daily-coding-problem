import { expect } from "chai";
import { rotateGrid } from "../src/GridRotate";

describe("Grid", () => {
  it("should return a new grid roated 90 degrees clockwise", () => {
    const result = rotateGrid([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
    expect(result).to.deep.equal([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]);
  });

  it("should return a new grid roated 90 degrees clockwise", () => {
    const result = rotateGrid([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]);
    expect(result).to.deep.equal([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]);
  });
});
