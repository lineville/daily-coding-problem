import { expect } from "chai";
import { stabbingSet } from "../src/StabbingSet";

describe("Stabbing set", () => {
  it("should return (4, 9)", () => {
    const result = stabbingSet([
      { start: 1, end: 4 },
      { start: 4, end: 5 },
      { start: 7, end: 9 },
      { start: 9, end: 12 },
    ]);
    expect(result).to.deep.equal({ start: 4, end: 9 });
  });

  it("should return (4, 9)", () => {
    const result = stabbingSet([
      { start: -11, end: 2 },
      { start: 4, end: 5 },
      { start: 7, end: 9 },
      { start: 9, end: 12 },
    ]);
    expect(result).to.deep.equal({ start: 2, end: 9 });
  });

  it("should return (4, 9)", () => {
    const result = stabbingSet([
      { start: 1, end: 3 },
      { start: 2, end: 3 },
      { start: 0, end: 3 },
    ]);
    expect(result).to.deep.equal({ start: 3, end: 3 });
  });
});
