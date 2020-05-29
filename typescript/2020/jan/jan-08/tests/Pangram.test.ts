import { expect } from "chai";
import { generatePangram } from "../src/Pangram";

describe("Pangram Generator", () => {
  it("generates a pangram", () => {
    let pangram: string = generatePangram();
    expect(pangram).to.satisfy(function (sentance: string) {
      const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
      for (let i: number = 0; i < alphabet.length; i++) {
        if (sentance.indexOf(alphabet[i]) === -1) {
          return false;
        }
      }
      return true;
    });
    expect(pangram.length).to.be.below(40);
  });
});
