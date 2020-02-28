import { expect } from "chai";
import BitArray from "../src/BitArray";

describe("BitArray", function() {
  it("init(5)", function() {
    const result: BitArray = new BitArray(5);
    expect(result.size()).to.equal(5);
  });

  it("set(1, 1)", function() {
    const result: BitArray = new BitArray(5);
    result.set(1, 1);
    expect(result.get(1)).to.equal(1);
  });

  it("get(1)", function() {
    const result: BitArray = new BitArray(5);
    result.set(1, 1);
    expect(result.get(1)).to.equal(1);
  });

  it("get(2)", function() {
    const result: BitArray = new BitArray(5);
    result.set(1, 1);
    expect(result.get(2)).to.not.equal(1);
  });
});
