// * Daily Coding Problem March 30 2020

// ****************************************

// * [Medium] -- Facebook
// * Given an N by N matrix, rotate it by 90 degrees clockwise.

// ! Ex: [[1, 2, 3],   ==>    [[7, 4, 1],
// !      [4, 5, 6],           [8, 5, 2]
// !      [7, 8, 9]]           [9, 6, 3]]

export const rotateGrid = (grid: number[][]): number[][] => {
  const size = grid.length;
  let newGrid = createGrid(size, size, 0);

  grid.forEach((row: number[], i: number) => {
    row.forEach((val: number, j: number) => {
      newGrid[j][size - i - 1] = val;
    });
  });

  return newGrid;
};

const createGrid = (width: number, height: number, val: number): number[][] => {
  let grid = [];
  for (let i = 0; i < height; i++) {
    grid[i] = new Array<number>();
    for (let j = 0; j < width; j++) {
      grid[i][j] = val;
    }
  }
  return grid;
};
