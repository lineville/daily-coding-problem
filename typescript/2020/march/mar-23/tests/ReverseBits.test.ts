import { expect } from "chai";
import { reverseBits } from "../src/ReverseBits";

describe("Reverse Bits", () => {
  it("should return 252645135", () => {
    const result = reverseBits(4042322160);
    expect(result).to.equal(252645135);
  });
});
