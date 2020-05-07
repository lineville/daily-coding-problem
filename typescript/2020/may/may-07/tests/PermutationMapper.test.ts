import { expect } from "chai";
import { permutationMapper } from "../src/PermutationMapper";

describe("Permutation Mapper", () => {
  it("Should map the permutation to the array", () => {
    const result = permutationMapper([2, 1, 0], ["a", "b", "c"]);
    expect(result).to.deep.equal(["c", "b", "a"]);
  });

  it("Should map the permutation to the array", () => {
    const result = permutationMapper(
      [0, 1, 2, 3, 4],
      ["a", "b", "c", "d", "e"]
    );
    expect(result).to.deep.equal(["a", "b", "c", "d", "e"]);
  });

  it("Should map the permutation to the array", () => {
    const result = permutationMapper(
      [2, 5, 0, 3, 4, 1],
      ["a", "b", "c", "d", "e", "f"]
    );
    expect(result).to.deep.equal(["c", "f", "a", "d", "e", "b"]);
  });

  it("Should map the permutation to the array", () => {
    expect(() => permutationMapper([], ["a", "b", "c"])).to.throw(
      "Permutation length mismatch"
    );
  });
});
