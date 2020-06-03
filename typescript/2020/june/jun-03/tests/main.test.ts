import { expect } from "chai";
import { nthFibonacci } from "../src/main";

describe("Nth Fibonacci", () => {
  it("Should return 0", () => {
    expect(nthFibonacci(1)).to.equal(0);
  });

  it("Should return 1", () => {
    expect(nthFibonacci(2)).to.equal(1);
  });

  it("Should return 3", () => {
    expect(nthFibonacci(5)).to.equal(3);
  });
});
