import { expect } from "chai";
import { areOneToOne } from "../src/OneToOneStrings";

describe("Checks if two strings have a one-to-one mapping", () => {
  it("should return true", () => {
    const result = areOneToOne("abc", "bcd");
    expect(result).to.be.true;
  });

  it("should return true", () => {
    const result = areOneToOne("foo", "baa");
    expect(result).to.be.true;
  });

  it("should return false", () => {
    const result = areOneToOne("foo", "bar");
    expect(result).to.be.false;
  });
});
