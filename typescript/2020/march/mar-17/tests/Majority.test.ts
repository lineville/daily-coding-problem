import { expect } from "chai";
import { majorityElement } from "../src/Majority";

describe("Majority Element", () => {
  it("should return 1", () => {
    const result = majorityElement([1, 2, 1, 1, 3, 4, 0]);
    expect(result).to.equal(1);
  });

  it("should return 2", () => {
    const result = majorityElement([1, 2, 2, 5, 6, 8, 2, 4, 2]);
    expect(result).to.equal(2);
  });

  it("should return 0", () => {
    const result = majorityElement([1, 2, 1, 1, 3, 4, 0, 0, 0, 0, 0, 0]);
    expect(result).to.equal(0);
  });
});
