import { expect } from "chai";
import { isPermutationPalindrome } from "../src/PalindromePermutation";

describe("Palindrome Permutation", () => {
  it("should return true", () => {
    const result = isPermutationPalindrome("carrace");
    expect(result).to.be.true;
  });

  it("should return true", () => {
    const result = isPermutationPalindrome("uffao at nr tna urj oa"); // * => A nut for a jar of tuna
    expect(result).to.be.true;
  });

  it("should return false", () => {
    const result = isPermutationPalindrome("daily");
    expect(result).to.be.false;
  });
});
