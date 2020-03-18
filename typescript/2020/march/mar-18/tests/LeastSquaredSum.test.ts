import { expect } from "chai";
import { leastSquaredSum } from "../src/LeastSquaredSum";

describe("Least Squared Sum", () => {
  it("should return 1", () => {
    const result = leastSquaredSum(100);
    expect(result).to.equal(1);
  });

  it("should return 2", () => {
    const result = leastSquaredSum(13);
    expect(result).to.equal(2);
  });

  it("should return 3", () => {
    const result = leastSquaredSum(27);
    expect(result).to.equal(3);
  });
});
