import { expect } from "chai";
import {
  uniquePrefixes,
  shortestPrefixNeeded,
  sharePrefix,
  longestNeededToBeUnique
} from "./../src/UniquePrefix";

describe("sharePrefix", () => {
  it("should return true", () => {
    const result = sharePrefix("apple", "apricot");
    expect(result).to.be.true;
  });

  it("should return false", () => {
    const result = sharePrefix("apple", "dog");
    expect(result).to.be.false;
  });
});

describe("shortestPrefixNeeded", () => {
  it("should return app", () => {
    const result = shortestPrefixNeeded("apple", "apricot");
    expect(result).to.equal("app");
  });

  it("should return apple", () => {
    const result = shortestPrefixNeeded("apple", "application");
    expect(result).to.equal("apple");
  });

  it("should return dog", () => {
    const result = shortestPrefixNeeded("dog", "doggo");
    expect(result).to.equal("dog");
  });
});

describe("longestNeededToBeUnique", () => {
  it("should return apple", () => {
    const result = longestNeededToBeUnique("apple", ["apricot", "application"]);
    expect(result).to.equal("apple");
  });
});

describe("uniquePrefixes", () => {
  it("should return ['d', 'c', 'app', 'apr', 'f']", () => {
    const result = uniquePrefixes(["dog", "cat", "apple", "apricot", "fish"]);
    expect(result).to.deep.equal(["d", "c", "app", "apr", "f"]);
  });

  it("should return ['d','apple', 'apr', 'f', 'appli']", () => {
    const result = uniquePrefixes([
      "dog",
      "apple",
      "apricot",
      "fish",
      "application"
    ]);
    expect(result).to.deep.equal(["d", "apple", "apr", "f", "appli"]);
  });
});
