import { expect } from "chai";
import { postFixExpressionCalculator } from "../src/PostFixExpressionCalculator";

describe("PostFixExpressionCalculator", () => {
  it("should return 8", () => {
    const result = postFixExpressionCalculator([5, 3, "+"]);
    expect(result).to.equal(8);
  });

  it("should return 5", () => {
    const result = postFixExpressionCalculator([
      15,
      7,
      1,
      1,
      "+",
      "-",
      "/",
      3,
      "*",
      2,
      1,
      1,
      "+",
      "+",
      "-"
    ]);
    expect(result).to.equal(5);
  });
});
