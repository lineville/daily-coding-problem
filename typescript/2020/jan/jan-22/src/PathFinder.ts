// * Daily Coding Problem Jan 22 2020

// * [Easy] -- Google

/**
 * * We are on a 2D infinite grid and can move in 8 directions
 * * left, right, up, down, and all 4 diagonals.
 * * Given a list of coordinates (x, y), and the order that we need to visit each coordinate,
 * * return the minimum number of steps it will take to visit them in order starting at first coordinate.
 *
 * ! Ex:  [(0, 0), (1, 1), (1, 2)] => 2 steps
 */

// * For simplicity lets  assume coordinates are in the order we need to visit them allready.
// * If they weren't we would just sort by the ordering or the list of orderings.
export const minimumSteps = (coordinates: Array<{ x: number; y: number }>) =>
  minStepsRecursive(coordinates, 0);

const minStepsRecursive = (
  coordinates: Array<{ x: number; y: number }>,
  stepsSoFar: number
): number => {
  // * Base Case:
  if (coordinates.length < 2) {
    return stepsSoFar;
  }

  // * Recursive Case: Get distance between coordinates and add it to what we have so far
  let src: { x: number; y: number } = coordinates[0];
  let dest: { x: number; y: number } = coordinates[1];
  let distanceToNext: number = computeDistance(src, dest);
  return minStepsRecursive(coordinates.slice(1), distanceToNext + stepsSoFar);
};

const computeDistance = (
  src: { x: number; y: number },
  dest: { x: number; y: number }
): number => {
  const horizontalDistance: number = Math.abs(src.x - dest.x);
  const verticalDistance: number = Math.abs(src.y - dest.y);
  const manHattanDistance: number = horizontalDistance + verticalDistance;
  const distanceSavedByDiagonals: number = Math.min(
    horizontalDistance,
    verticalDistance
  );
  return manHattanDistance - distanceSavedByDiagonals;
};
