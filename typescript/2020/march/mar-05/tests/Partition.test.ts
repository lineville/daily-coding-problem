import { expect } from "chai";
import { partition } from "../src/Partition";

describe("Partition", () => {


  it("Pivot: 10, List: [9, 12, 3, 5, 14, 10, 10]", () => {
    const result : Array<number> = partition(10, [9, 12, 3, 5, 14, 10, 10]);
    expect(result).to.deep.equal([9, 3, 5, 10, 10, 12, 14]);
  })


  it("Pivot: 9, List: [9, 12, 3, 5, 14, 10, 10]", () => {
    const result : Array<number> = partition(9, [9, 12, 3, 5, 14, 10, 10]);
    expect(result).to.deep.equal([3, 5, 9, 12, 14, 10, 10]);
  })
})