import { expect } from "chai";
import Subscribers from "../src/main";

describe("Subscribers", () => {
  let subscribers: Subscribers;
  beforeEach(() => {
    subscribers = new Subscribers([
      10,
      5,
      4,
      50,
      70,
      35,
      100,
      1000,
      50,
      25,
      14,
      10000,
      10,
      5,
      4,
      50,
      70,
      35,
      100,
      1000,
      50,
      25,
      14,
      10000,
    ]);
  });

  it("should create and display things", () => {
    subscribers.display();
    expect(subscribers).to.not.be.null;
  });

  it("should be updatable", () => {
    subscribers.update(4, 100);
    subscribers.display();
    expect(subscribers).to.not.be.null;
  });

  it("should be queryable", () => {
    const result = subscribers.query(3, 7);
    subscribers.display();
    expect(result).to.eq(1255);
  });

  it("should be queryable", () => {
    const result = subscribers.query(3, 3);
    subscribers.display();
    expect(result).to.eq(50);
  });
});
