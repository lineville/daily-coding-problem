import { expect } from "chai";
import {
  computeMarkovChain,
  computeMarkovChainRecursive,
} from "../src/MarkovChain";

describe("Markov Chain", () => {
  it("Iterative: should return occurrences where a > b > c", () => {
    const result = computeMarkovChain(
      "a",
      [
        { start: "a", end: "a", probability: 0.9 },
        { start: "a", end: "b", probability: 0.075 },
        { start: "a", end: "c", probability: 0.025 },
        { start: "b", end: "a", probability: 0.15 },
        { start: "b", end: "b", probability: 0.8 },
        { start: "b", end: "c", probability: 0.05 },
        { start: "c", end: "a", probability: 0.25 },
        { start: "c", end: "b", probability: 0.25 },
        { start: "c", end: "c", probability: 0.5 },
      ],
      5000
    );
    console.table(result);

    expect(result.get("a")).to.be.greaterThan(result.get("b") || 0);
    expect(result.get("b")).to.be.greaterThan(result.get("c") || 0);
  });

  // * Requries smaller numSteps (stack will max out at 5000)
  it("Recursive: should return occurrences where a > b > c", () => {
    const result = computeMarkovChainRecursive(
      "a",
      [
        { start: "a", end: "a", probability: 0.9 },
        { start: "a", end: "b", probability: 0.075 },
        { start: "a", end: "c", probability: 0.025 },
        { start: "b", end: "a", probability: 0.15 },
        { start: "b", end: "b", probability: 0.8 },
        { start: "b", end: "c", probability: 0.05 },
        { start: "c", end: "a", probability: 0.25 },
        { start: "c", end: "b", probability: 0.25 },
        { start: "c", end: "c", probability: 0.5 },
      ],
      500
    );
    console.table(result);

    expect(result.get("a")).to.be.greaterThan(result.get("b") || 0);
    expect(result.get("b")).to.be.greaterThan(result.get("c") || 0);
  });
});
