import { expect } from "chai";
import { calculateHIndex, calculateHIndexBetter } from "../src/main";

describe("H-Index", () => {
  it("should return 3", () => {
    expect(calculateHIndex([4, 3, 0, 1, 5])).to.equal(3);
  });

  it("should return 2", () => {
    expect(calculateHIndex([4, 3, 0])).to.equal(2);
  });

  it("should return 1", () => {
    expect(calculateHIndex([4])).to.equal(1);
  });
});

describe("H-Index Better", () => {
  it("[4, 3, 0, 1, 5] should return 3", () => {
    expect(calculateHIndexBetter([4, 3, 0, 1, 5])).to.equal(3);
  });

  it("[4, 3, 0] should return 2", () => {
    expect(calculateHIndexBetter([4, 3, 0])).to.equal(2);
  });

  it("[4] should return 1", () => {
    expect(calculateHIndexBetter([4])).to.equal(1);
  });

  it("[4, 2, 7, 4, 0, 1] should return 3", () => {
    expect(calculateHIndexBetter([4, 2, 7, 4, 0, 1])).to.equal(3);
  });
});
