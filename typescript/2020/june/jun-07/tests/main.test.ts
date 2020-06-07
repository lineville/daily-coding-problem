import { expect } from "chai";
import { isValidPassword, generateValidPasswords } from "../src/main";

describe("Valid Password", () => {
  it("should return true", () => {
    expect(isValidPassword([4, 2, 1, 7])).to.equal(true);
  });

  it("should return false", () => {
    expect(isValidPassword([2, 1, 7])).to.equal(false);
  });

  it("should return true", () => {
    expect(isValidPassword([2, 4, 8, 7, 1])).to.equal(true);
  });

  it("should return false", () => {
    expect(isValidPassword([2, 4, 6])).to.equal(false);
  });

  it("should return false", () => {
    expect(isValidPassword([2, 4, 8, 6, 2])).to.equal(false);
  });
});

describe("Generate Permutations", () => {
  it("should be 9", () => {
    expect(generateValidPasswords(1)).to.equal(9);
  });

  it("should be 28", () => {
    expect(generateValidPasswords(2)).to.equal(28);
  });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(3)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(4)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(5)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(6)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(7)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(8)).to.greaterThan(1000);
  // });

  // it("should be real big", () => {
  //   expect(generateValidPasswords(9)).to.greaterThan(1000);
  // });
});
