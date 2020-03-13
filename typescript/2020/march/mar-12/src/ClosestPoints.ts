// * Daily Coding Problem March 12 2020

// * [Hard] -- LinkedIn

// ********************************

// * Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

// ! Ex: points = [(0, 0), (5, 4), (3, 1)], center = (1, 2) k = 2 => [(0, 0), (3, 1)] ( these are the 2 points closest to (1,2) )

export type Point = { x: number; y: number };

// * Time: O(n logn) but also O(N * (N - k)) so at worst N^2 and at best n logn
export const closestPoints = (
  points: Point[],
  center: Point,
  k: number
): Point[] => {
  const distances = points.map(p => distanceFromCenter(p, center));
  let map = new Map<Point, number>();

  points.forEach((point: Point) => {
    map.set(point, distanceFromCenter(point, center));
  });
  
  let kShortestDistances = distances.sort((a, b) => a - b).slice(0, k);
  let kShortestPoints = new Array<Point>();

  map.forEach((dist: number, point: Point) => {
    // * There has to be a better way to do this below this is what makes this worst case O(N^2)
    if (kShortestDistances.includes(dist)) {
      kShortestPoints.push(point);
    }
  });

  return kShortestPoints;
};

// * Time: O(M * N) where M and N are dimensions of smallest possible grid needed to contain all points
export const displayPoints = (points: Point[], center: Point): void => {
  const largestX = findLargest(points, "x");
  const largestY = findLargest(points, "y");
  const grid = new Array<Array<string>>();

  for (let i = 0; i < largestX; i++) {
    let row = [];
    for (let j = 0; j < largestY; j++) {
      row[j] = "❌";
    }
    grid.push(row);
  }

  points.forEach((point: Point) => {
    grid[point.x][point.y] = "✔️";
  });

  grid[center.x][center.y] = "!";
  console.log(grid);
};

// * Time: O(N) where N is the number of points
const findLargest = (points: Point[], axis: string): number => {
  let largest = 0;

  if (axis === "x") {
    points.forEach((point: Point) => {
      if (point.x > largest) {
        largest = point.x;
      }
    });
  } else {
    points.forEach((point: Point) => {
      if (point.y > largest) {
        largest = point.y;
      }
    });
  }
  return largest + 1; // * Adding one since grid starts at (0, 0)
};

// * Time/Space: O(1)
const distanceFromCenter = (point: Point, center: Point): number => {
  return Math.sqrt(
    Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)
  );
};
