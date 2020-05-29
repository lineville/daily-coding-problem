import { expect, assert } from "chai";
import {
  validDirections,
  constraintSatisfied,
  invertDir,
  computeDirection,
  Direction,
} from "./../src/DirectionValidator";

describe("Direction Validator", () => {
  it("validDirections : invalid", () => {
    let result = validDirections(["A N B", "B NE C", "C N A"]);
    expect(result).to.be.false;
  });

  it("validDirections : invalid", () => {
    let result = validDirections(["A N B", "B NE C", "C E A"]);
    expect(result).to.be.false;
  });

  it("validDirections : valid", () => {
    let result = validDirections(["A NW B", "A N B"]);
    expect(result).to.be.true;
  });

  it("validDirections : valid", () => {
    let result = validDirections(["A NW B", "B N C", "D E C"]);
    expect(result).to.be.true;
  });
});

describe("Constraint Checker", () => {
  it("constraintSatisfied : N", () => {
    let result = constraintSatisfied("A N B", {
      A: { x: 0, y: 0 },
      B: { x: 0, y: -1 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied: S", () => {
    let result = constraintSatisfied("A S B", {
      A: { x: 0, y: 0 },
      B: { x: 0, y: 1 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied: W", () => {
    let result = constraintSatisfied("A W B", {
      A: { x: 0, y: 0 },
      B: { x: 1, y: 0 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied : E", () => {
    let result = constraintSatisfied("A E B", {
      A: { x: 1, y: 0 },
      B: { x: 0, y: 0 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied : NW", () => {
    let result = constraintSatisfied("A NW B", {
      A: { x: 0, y: 0 },
      B: { x: 1, y: -1 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied : NE", () => {
    let result = constraintSatisfied("A NE B", {
      A: { x: 0, y: 0 },
      B: { x: -1, y: -1 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied : SW", () => {
    let result = constraintSatisfied("A SW B", {
      A: { x: 0, y: 0 },
      B: { x: 1, y: 1 },
    });
    expect(result).to.be.true;
  });

  it("constraintSatisfied : SE", () => {
    let result = constraintSatisfied("A SE B", {
      A: { x: 0, y: 0 },
      B: { x: -1, y: 1 },
    });
    expect(result).to.be.true;
  });
});

describe("Invert Direction", () => {
  it("Invert Dir : N", () => {
    let result = invertDir("N");
    expect(result).to.equal("S");
  });

  it("Invert Dir : S", () => {
    let result = invertDir("S");
    expect(result).to.equal("N");
  });

  it("Invert Dir : E", () => {
    let result = invertDir("E");
    expect(result).to.equal("W");
  });

  it("Invert Dir : W", () => {
    let result = invertDir("W");
    expect(result).to.equal("E");
  });

  it("Invert Dir : NW", () => {
    let result = invertDir("NW");
    expect(result).to.equal("SE");
  });

  it("Invert Dir : NE", () => {
    let result = invertDir("NE");
    expect(result).to.equal("SW");
  });

  it("Invert Dir : SW", () => {
    let result = invertDir("SW");
    expect(result).to.equal("NE");
  });

  it("Invert Dir : SE", () => {
    let result = invertDir("SE");
    expect(result).to.equal("NW");
  });
});

describe("Compute Direction", () => {
  it("Direction: N", () => {
    let result = computeDirection("N", { x: 0, y: 0 });
    expect(result).to.eql({ x: 0, y: -1 });
  });
  it("Direction: S", () => {
    let result = computeDirection("S", { x: 0, y: 0 });
    expect(result).to.eql({ x: 0, y: 1 });
  });
  it("Direction: E", () => {
    let result = computeDirection("E", { x: 0, y: 0 });
    expect(result).to.eql({ x: -1, y: 0 });
  });
  it("Direction: W", () => {
    let result = computeDirection("W", { x: 0, y: 0 });
    expect(result).to.eql({ x: 1, y: 0 });
  });
  it("Direction: NW", () => {
    let result = computeDirection("NW", { x: 0, y: 0 });
    expect(result).to.eql({ x: 1, y: -1 });
  });
  it("Direction: NE", () => {
    let result = computeDirection("NE", { x: 0, y: 0 });
    expect(result).to.eql({ x: -1, y: -1 });
  });
  it("Direction: SW", () => {
    let result = computeDirection("SW", { x: 0, y: 0 });
    expect(result).to.eql({ x: 1, y: 1 });
  });
  it("Direction: SE", () => {
    let result = computeDirection("SE", { x: 0, y: 0 });
    expect(result).to.eql({ x: -1, y: 1 });
  });
});
