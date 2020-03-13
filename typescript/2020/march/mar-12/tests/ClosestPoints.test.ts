import { expect } from "chai";
import { closestPoints, Point, displayPoints } from "../src/ClosestPoints";

describe("ClosestPoints", () => {
  var points: Point[];

  beforeEach(() => {
    points = [];
    points.push({ x: 0, y: 0 });
    points.push({ x: 5, y: 4 });
    points.push({ x: 3, y: 1 });
  });

  it("should return [(0, 0), (3, 1)]", () => {
    const center = { x: 1, y: 2 };
    const result = closestPoints(points, center, 2);
    displayPoints(points, center);
    expect(result).to.deep.equal([
      { x: 0, y: 0 },
      { x: 3, y: 1 }
    ]);
  });

  it("should return [(0, 0)]", () => {
    const center = { x: 0, y: 2 };
    const result = closestPoints(points, center, 1);
    displayPoints(points, center);
    expect(result).to.deep.equal([
      { x: 0, y: 0 }
    ]);
  });

  it("should return [(5, 4), (3, 1)]", () => {
    const center = { x: 3, y: 5 };
    const result = closestPoints(points, center, 2);
    displayPoints(points, center);
    expect(result).to.deep.equal([
      { x: 5, y: 4 },
      { x: 3, y: 1 }
    ]);
  });
});
