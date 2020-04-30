import { expect } from "chai";
import {
  largestDivisibleSubset,
  satisfiesCondition,
  collatz,
} from "../src/LargestDivisibleSubset";

xdescribe("Largest Divisible Subset", () => {
  it("should return [5, 10, 20]", () => {
    const result = largestDivisibleSubset([3, 5, 10, 20, 21]);
    expect(result).to.deep.equal([5, 10, 20]);
  });

  it("should return [1, 3, 6, 24]", () => {
    const result = largestDivisibleSubset([1, 3, 6, 24]);
    expect(result).to.deep.equal([1, 3, 6, 24]);
  });

  it("should return true", () => {
    const result = satisfiesCondition(5, 10);
    expect(result).to.be.true;
  });

  it("should return false", () => {
    const result = satisfiesCondition(3, 5);
    expect(result).to.be.false;
  });
});

describe("Collatz Conjecture", () => {
  it("should always return 1", () => {
    const result = collatz(4);
    expect(result).to.be.equal(1);
  });

  it("should always return 1", () => {
    const result = collatz(10);
    expect(result).to.be.equal(1);
  });

  it("should always return 1", () => {
    const result = collatz(3);
    expect(result).to.be.equal(1);
  });
});
