// * Daily Coding Problem June 23 2020

// * [Medium] -- PayPal

// * Given a string and a number of lines k, print the string in zigzag form.
// * In zigzag, characters are printed out diagonally from top left to bottom right
// * until reaching the kth line, then back up to top right, and so on.

// ! Ex: "thisisazigzag" k = 4
// * t     a     g (5 spaces)
// *  h   s z   a
// *   i i   i z
// *    s     g

// * Time O(N) where N is length of string
// * Space O(N * K) where N is length of string and K is number of rows
export const zigzag = (str: string, k: number): void => {
  // * Create grid of k rows, and str.length columns
  let grid = [...Array<string>(k)].map(() =>
    Array<string>(str.length).fill(' ')
  )

  // * Track current row, col and current direction (up/down) as we zig-zag
  let row = 0
  let col = 0
  let down = true

  str.split('').forEach((c) => {
    // * Place letter at row, col. Column always moves right
    grid[row][col] = c
    col++

    // * Check which direction we are going and if we hit a boundar, update row accordingly
    if (down) {
      if (row === k - 1) {
        down = false
        row--
      } else {
        row++
      }
    } else {
      if (row === 0) {
        down = true
        row++
      } else {
        row--
      }
    }
  })

  // * Print out the zigzag grid
  for (const row of grid) {
    console.log(row.join(''))
  }
}
