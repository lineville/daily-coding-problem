import { expect } from "chai";
import { grayCode, replaceCharAt } from "../src/GrayCode";

describe("GrayCode", () => {
  it("should return [0, 1]", () => {
    const result = grayCode(1);
    expect(result).to.deep.equal(["0", "1"]);
  })

  it("should return [00, 01, 11, 10]", () => {
    const result = grayCode(2);
    expect(result).to.deep.equal(["00", "01", "11", "10"]);
  })

  it("should return [000, 001, 011, 111, 101, 100]", () => {
    const result = grayCode(3);
    expect(result).to.deep.equal(["000", "001", "011", "111", "110", "100"]);
  })

  it("should return [0000, 0001, 0011, 0111, 1111, 1110, 1100, 1000]", () => {
    const result = grayCode(4);
    expect(result).to.deep.equal(["0000", "0001", "0011", "0111", "1111", "1110", "1100", "1000"]);
  })

})

describe("Replace character at idx with new char", () => {

  it("Should replace char at 2 with 1", () => {
    const result = replaceCharAt("0000", 2, "1");
    expect(result).to.equal("0010");
  })

  it("Should replace char at 0 with 1", () => {
    const result = replaceCharAt("0", 0, "1");
    expect(result).to.equal("1");
  })
})