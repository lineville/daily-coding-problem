// * Daily Coding Problem Jan 6th 2020

// * [Medium] -- Amazon

/**
 * * Given a 2d matrix of 1's (land) and 0's water, count the number of islands
 * ! Ex:
 * 1 0 0 0 0
 * 0 0 1 1 0
 * 0 1 1 0 0
 * 0 0 0 0 0
 * 1 1 0 0 1
 * 1 1 0 0 1
 *
 * * 4 islands
 */

export const numberOfIslands = (grid: Array<Array<number>>): number => {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] == 1) {
        recHelper(grid, i, j);
        result++;
      }
    }
  }

  return result;
};

const recHelper = (grid: Array<Array<number>>, i: number, j: number): void => {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // * Check that i and j are not out of bounds and that space at i, j is not water (0) or visited (2)
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] == 0 ||
    grid[i][j] == 2
  ) {
    return;
  }

  // * Mark this space as visited and make a recursive call in all directions
  grid[i][j] = 2;
  directions.forEach((dir: Array<number>): void => {
    recHelper(grid, i + dir[0], j + dir[1]);
  });
};
