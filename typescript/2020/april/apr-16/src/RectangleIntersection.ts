// * Daily Coding Problem April 16th 2020

// * [Easy] -- Google

// * Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

// ! Ex: rectangleIntersection ({ topLeft: (1, 4), dimensions: (3, 3)}, { topLeft: (0, 5), dimensions: (4, 3)}) => 6




type Rectangle = {
  topLeft: { x: number, y: number};
  dimensions: { width: number, height: number};
}

export const rectangleIntersection = (rect1 : Rectangle, rect2 : Rectangle) : number => {
  const points1 = allPoints(rect1);
  const points2 = allPoints(rect2);
  const intersection = points1.filter(point => points2.filter(p => p.x === point.x && p.y === point.y).length > 0);

  return intersection.length;
}

const allPoints = (rect : Rectangle) : Array<{ x: number, y: number }> => {
  let result = [];

  for (let i = rect.topLeft.x; i < rect.topLeft.x + rect.dimensions.width; i++) {
    for (let j = rect.topLeft.y; j < rect.topLeft.y + rect.dimensions.height; j++) {
      result.push({ x: i, y: j });
    }
  }
  return result;
}