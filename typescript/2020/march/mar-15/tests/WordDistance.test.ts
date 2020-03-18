import { expect } from "chai";
import { wordDistance } from "../src/WordDistance";

describe("WordDistance", () => {
  it("should return 1", () => {
    const result = wordDistance(
      "hello",
      "world",
      "dog cat hello cat dog dog hello cat world"
    );
    expect(result).to.equal(1);
  });
});
