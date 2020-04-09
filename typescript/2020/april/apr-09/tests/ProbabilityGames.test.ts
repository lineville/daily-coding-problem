import { expect, should } from "chai";
import {
  rollDie,
  game1,
  game2,
  expectedRollsToWin,
} from "../src/ProbabilityGames";

describe("Probability Games", () => {
  it("should return random values in [1, 2, 3, 4, 5, 6]", () => {
    const values = new Array<number>(100).fill(0);
    for (let i = 0; i < values.length; i++) {
      values[i] = rollDie();
    }

    values.forEach((val) => {
      expect(val).to.be.lessThan(7).and.greaterThan(0);
    });
  });

  it("game 1: stops with 5, 6", () => {
    const result = game1();
    expect(result.length).to.be.greaterThan(1);
    expect(result[result.length - 1]).to.equal(6);
    expect(result[result.length - 2]).to.equal(5);
  });

  it("game 2: stops with 5, 5", () => {
    const result = game2();
    expect(result.length).to.be.greaterThan(1);
    expect(result[result.length - 1]).to.equal(5);
    expect(result[result.length - 2]).to.equal(5);
  });

  it("expected rolls to win game 1 should approximate number of tries", () => {
    const result = expectedRollsToWin(1000000, game1);
    console.log(result);
    expect(result).to.be.lessThan(50);
  });

  it("expected rolls to win game 1 should approximate number of tries", () => {
    const result = expectedRollsToWin(1000000, game2);
    console.log(result);
    expect(result).to.be.lessThan(50);
  });
});
