import { expect } from "chai";
import { nextGreatesPermuation } from "../src/NextGreatestPermutation";

describe("NextGreatestPermutation", () => {
  it("should return 251678", () => {
    const result = nextGreatesPermuation(218765);
    expect(result).to.equal(251678);
  });

  it("should return 49578", () => {
    const result = nextGreatesPermuation(48975);
    expect(result).to.equal(49578);
  });

  it("should return 1243", () => {
    const result = nextGreatesPermuation(1234);
    expect(result).to.equal(1243);
  });

  it("should return 536479", () => {
    const result = nextGreatesPermuation(534976);
    expect(result).to.equal(536479);
  });

  it("should throw errro", () => {
    expect(() => nextGreatesPermuation(4321)).to.throw(
      "There is no larger permutation of 4321"
    );
  });
});
