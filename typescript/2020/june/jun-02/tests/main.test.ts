import { expect } from "chai";
import PrefixMapSum from "../src/main";

describe("PrefixMapSum", () => {
  let prefixMapSum: PrefixMapSum;

  beforeEach(() => {
    prefixMapSum = new PrefixMapSum();
  });

  it("Should return 0", () => {
    expect(prefixMapSum.sum("col")).to.eq(0);
  });

  it("Should return 3", () => {
    prefixMapSum.insert("columnar", 3);
    expect(prefixMapSum.sum("col")).to.eq(3);
  });

  it("Should return 5", () => {
    prefixMapSum.insert("columnar", 3);
    prefixMapSum.insert("column", 2);
    expect(prefixMapSum.sum("col")).to.eq(5);
  });
});
