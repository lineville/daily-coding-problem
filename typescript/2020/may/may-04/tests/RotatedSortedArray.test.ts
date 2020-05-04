import { expect } from "chai";
import { findSmallestElement } from "../src/RotatedSortedArray";

describe("Sorted Rotated Array", () => {
  it("should return 3", () => {
    const result = findSmallestElement([5, 7, 10, 3, 4]);
    expect(result).to.equal(3);
  });

  it("should return 4", () => {
    const result = findSmallestElement([6, 7, 10, 40, 50, 4, 5]);
    expect(result).to.equal(4);
  });

  it("should return 5", () => {
    const result = findSmallestElement([5, 7, 10, 40, 50]);
    expect(result).to.equal(5);
  });

  it("should return throw error", () => {
    expect(() => findSmallestElement([])).to.throw(
      "Cannot find smallest element of an empty array"
    );
  });

  it("should return 1", () => {
    const result = findSmallestElement([1]);
    expect(result).to.equal(1);
  });
});
