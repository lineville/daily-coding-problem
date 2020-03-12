import { expect } from "chai";
import SubListSum, { simpleSubListSum } from "../src/SubListSum";

describe("simpleSubListSum", () => {
  it("should return 1", () => {
    const result = simpleSubListSum([1, 2, 3, 4, 5], 0, 1);
    expect(result).to.equal(1);
  });

  it("should return 5", () => {
    const result = simpleSubListSum([1, 2, 3, 4, 5], 1, 3);
    expect(result).to.equal(5);
  });

  it("should return 9", () => {
    const result = simpleSubListSum([1, 2, 3, 4, 5], 1, 4);
    expect(result).to.equal(9);
  });
});

describe("subListSum Optimized", () => {
  var subListSummer: SubListSum;

  beforeEach(() => {
    subListSummer = new SubListSum([1, 2, 3, 4, 5]);
  });

  it("should return 1", () => {
    const result = subListSummer.sum(0, 1);
    expect(result).to.equal(1);
  });

  it("should return 5", () => {
    const result = subListSummer.sum(1, 3);
    expect(result).to.equal(5);
  });

  it("should return 9", () => {
    const result = subListSummer.sum(1, 4);
    expect(result).to.equal(9);
  });
});
