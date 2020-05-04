// * Daily Coding Problem April 26th 2020

// * [Hard] -- Google

// * Let A be an N by M matrix in which every row and every column is sorted.

// * Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

// ! Ex: [[1, 3, 7, 10, 15, 20],
// !      [2, 6, 9, 14, 22, 25],
// !      [3, 8, 10, 15, 25, 30],
// !      [10, 11, 12, 23, 30, 35],
// !      [20, 25, 30, 35, 40, 45]]

// * Given i1 = 1, j1 = 1, i2 = 3, j2 = 3 return 15 since there are 14 numbers less than 6 and greater than 23

export const numbersLessThanAndGreaterThan = (sortedGrid: number[][], i1: number, j1: number, i2: number, j2: number): number => {
  const lessThanMe = sortedGrid[i1][j1]
  const greaterThanMe = sortedGrid[i2][j2]
  let result = 0 
  
  // Find all the numbers less than lessThanMe
  for (let i = 0; i < sortedGrid.length; i++) {
    let columnIdx = 0
    while (sortedGrid[i][columnIdx] < lessThanMe) {
      result ++
      columnIdx ++
    }
  }

  // Find all the numbers greater than greaterThanMe
  for (let i = sortedGrid.length - 1; i >= 0; i--) {
    let columnIdx = sortedGrid[0].length - 1
    while (sortedGrid[i][columnIdx] > greaterThanMe) {
      result ++
      columnIdx --
    }
  }

  return result
}