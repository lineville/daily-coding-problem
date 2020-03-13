import { expect } from "chai";
import { colorFill } from "../src/ColorFill";

describe("ColorFill", () => {
  var grid: Array<Array<string>>;

  beforeEach(() => {
    grid = [
      ["B", "B", "W"],
      ["W", "W", "W"],
      ["W", "W", "W"],
      ["B", "B", "B"]
    ];
  });

  it("should return grid with all W filled with G", () => {
    const result = colorFill(grid, { x: 2, y: 2 }, "G");
    console.log(result);
    expect(result).to.deep.equal([
      ["B", "B", "G"],
      ["G", "G", "G"],
      ["G", "G", "G"],
      ["B", "B", "B"]
    ]);
  });

  it("should return grid with all B filled with Y", () => {
    const result = colorFill(grid, { x: 0, y: 1 }, "Y");
    console.log(result);
    expect(result).to.deep.equal([
      ["Y", "Y", "W"],
      ["W", "W", "W"],
      ["W", "W", "W"],
      ["Y", "Y", "Y"]
    ]);
  });
});
