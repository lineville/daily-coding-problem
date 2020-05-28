import { expect } from "chai";
import { largestNumber } from "../src/main";

describe("LargestNumber", () => {
  it("should return 77641510", () => {
    expect(largestNumber([10, 7, 76, 415])).to.equal(77641510);
  });

  it("should return 6054854654", () => {
    expect(largestNumber([54, 546, 548, 60])).to.equal(6054854654);
  });

  it("should return 998764543431", () => {
    expect(largestNumber([1, 34, 3, 98, 9, 76, 45, 4])).to.equal(998764543431);
  });
});
