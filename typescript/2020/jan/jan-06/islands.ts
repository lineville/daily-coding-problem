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

const numberOfIslands = (grid: Array<Array<number>>): number => {
  let result: number = 0;
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid.length; j++) {
      if (grid[i][j] == 1) {
        recHelper(grid, i, j);
        result++;
      }
    }
  }

  return result;
};

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

const recHelper = (grid: Array<Array<number>>, i: number, j: number): void => {
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

  grid[i][j] = 2;
  directions.forEach((dir: Array<number>) : void => {
    recHelper(grid, i + dir[0], j + dir[1]);
  });
};

const testIslandCounter = (): void => {
  const input: Array<Array<number>> = [
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1]
  ];

  const expected: number = 4;
  const result: number = numberOfIslands(input);

  console.log(result === expected ? "Passed" : "Failed");
};

testIslandCounter();
