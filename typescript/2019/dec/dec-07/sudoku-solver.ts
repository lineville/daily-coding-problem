// * Daily Coding Problem Dec 7th 2019

// * [Hard] -- Dropbox

/**
 * * Sudoku is a 9x9 grid that is partially filled in and the goal is
 * * to fill the grid so that every row and column has each number 1-9
 * * each 3x3 sub-grid should contain all numbers 1-9
 *
 * * Given a partially solved sudoku board fill it in
 */

type Cell = {
  row: number
  column: number
  value: number | null
}

class Sudoku {
  board: Array<Array<number>>

  constructor(initVals?: Array<Cell>) {
    // * Create a 9 x 9 board of all null values
    this.board = new Array<Array<number>>(9)
    for (let i: number = 0; i < this.board.length; i++) {
      this.board[i] = [null, null, null, null, null, null, null, null, null]
    }

    // * Populate the  board with initial values if they were given
    if (initVals) {
      initVals.forEach((cell: Cell) => {
        this.board[cell.row][cell.column] = cell.value
      })
    }
  }

  // * Print out the board
  print = (): void => {
    console.log('_____________________________________')
    this.board.forEach((row: Array<number>, index: number) => {
      let rowStr = '|'
      row.forEach((val: number) => {
        rowStr += ' ' + (val ? val : '_') + ' |'
      })
      console.log(rowStr)
      if ((index + 1) % 3 === 0) {
        console.log('-------------------------------------')
      }
    })
  }

  // * Create a new board that is solved by using the current board state
  solve = (): Array<Array<number>> => {
    let result: Array<Array<number>> = this.board

    // * Solve the board here!

    return result
  }
}

const testSudokuSolver = (): void => {
  let initCells: Array<Cell> = [
    { row: 0, column: 3, value: 2 },
    { row: 0, column: 4, value: 6 },
    { row: 0, column: 6, value: 7 },
    { row: 0, column: 8, value: 1 },

    { row: 1, column: 0, value: 6 },
    { row: 1, column: 1, value: 8 },
    { row: 1, column: 4, value: 7 },
    { row: 1, column: 7, value: 9 },

    { row: 2, column: 0, value: 1 },
    { row: 2, column: 1, value: 9 },
    { row: 2, column: 5, value: 4 },
    { row: 2, column: 6, value: 5 },

    { row: 3, column: 0, value: 8 },
    { row: 3, column: 1, value: 2 },
    { row: 3, column: 3, value: 1 },
    { row: 3, column: 7, value: 4 },

    { row: 4, column: 2, value: 4 },
    { row: 4, column: 3, value: 6 },
    { row: 4, column: 5, value: 2 },
    { row: 4, column: 6, value: 9 },

    { row: 5, column: 1, value: 5 },
    { row: 5, column: 5, value: 3 },
    { row: 5, column: 7, value: 2 },
    { row: 5, column: 8, value: 8 },

    { row: 6, column: 2, value: 9 },
    { row: 6, column: 3, value: 3 },
    { row: 6, column: 7, value: 7 },
    { row: 6, column: 8, value: 4 },

    { row: 7, column: 1, value: 4 },
    { row: 7, column: 4, value: 5 },
    { row: 7, column: 7, value: 3 },
    { row: 7, column: 8, value: 6 },

    { row: 8, column: 0, value: 7 },
    { row: 8, column: 2, value: 3 },
    { row: 8, column: 4, value: 1 },
    { row: 8, column: 5, value: 8 },
  ]
  let sudoku = new Sudoku(initCells)

  sudoku.print()
  sudoku.board = sudoku.solve()
  sudoku.print()
}

testSudokuSolver()
