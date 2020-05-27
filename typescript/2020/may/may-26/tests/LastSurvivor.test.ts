import { expect } from "chai";
import { positionToSurvive, positionToSurviveV2 } from "../src/LastSurvivor";

describe("LastSurvivor V1 Recursive", () => {
  it("should return 3", () => {
    expect(positionToSurvive(5, 2)).to.eq(3);
  });

  it("should return 4", () => {
    expect(positionToSurvive(7, 3)).to.eq(4);
  });
});

xdescribe("LastSurvivor V2 Iterative", () => {
  it("should return 3", () => {
    expect(positionToSurviveV2(5, 2)).to.eq(3);
  });

  it("should return 4", () => {
    expect(positionToSurviveV2(7, 3)).to.eq(4);
  });
});
