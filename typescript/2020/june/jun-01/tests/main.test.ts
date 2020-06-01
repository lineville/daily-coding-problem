import { expect } from "chai";
import { noRepeatedCharacters } from "../src/main";

describe("Main", () => {
  it("Should contain no repeated characters", () => {
    const result = noRepeatedCharacters("aaabbc");
    expect(result).to.eql("abacba");
  });

  it("Should return null", () => {
    expect(noRepeatedCharacters("aaab")).to.be.null;
  });
});
