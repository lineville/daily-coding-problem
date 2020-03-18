import { expect } from "chai";
import HeapStack from "../src/HeapStack";

type HeapStackValues = { value: string };

describe("HeapStack", () => {
  var heap: HeapStack<HeapStackValues>;

  beforeEach(() => {
    heap = new HeapStack<HeapStackValues>();
  });

  it("should push and pop", () => {
    heap.push({ value: "A" });
  });
});
