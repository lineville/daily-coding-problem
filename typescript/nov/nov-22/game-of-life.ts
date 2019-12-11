// *  Daily coding problem Nov 22 2019

// * Conway's game of life

/**
 * * Infinite 2d board (only display relevant cells -- ones live cells)
 * * Each cell is alive or dead, after each clock tick (iteration) the following rules get applied
 *
 * * 1. live cells with less than 2 neighbors or more than 3 neighbors die
 * * 2. live cells with 2 or 3 neighbors stay alive (nothing happens)
 * * 3. dead cells with exactly three neighbors becomes alive
 *
 * ! Neighbors are vertical, horizontal or diagonal (Cells can have 8, 5, 3, )
 *
 * * Goals:
 * * Take in a list of initial cell coordinates to initialize to alive
 * * Take in a number of iterations to play out the game
 * * Print out a grid of the relevant grid space at each iteration
 *
 */

type Cell = {
  row: number
  column: number
}

class GameOfLife {
  board: Array<Array<boolean>>

  // * Initialize board to an empty board, or an array large enough to accomodate
  // * the optional initial coordianates, with the coordinates initialized.
  constructor(initCoords?: Array<Cell>) {
    this.board = initCoords ? this.populateGrid(initCoords) : new Array<Array<boolean>>()
  }

  // * Calculates the dimensions of the board required to accomodate the init coords
  dimensionsRequiredForInit = (initCoords: Array<Cell>): number => {
    let dimensionsNeeded = 0
    initCoords.forEach(cell => {
      let bigger = Math.max(cell.row, cell.column)
      if (bigger > dimensionsNeeded) {
        dimensionsNeeded = bigger
      }
    })
    return dimensionsNeeded + 1
  }

  // * Populates a new grid with the initial coordinates provided
  populateGrid = (initCoords: Array<Cell>): Array<Array<boolean>> => {
    const dimensions = this.dimensionsRequiredForInit(initCoords)
    let grid = new Array<Array<boolean>>(dimensions)
    for (let i = 0; i < dimensions; i++) {
      let deadRow = new Array<boolean>(dimensions)
      for (let j = 0; j < dimensions; j++) {
        deadRow[j] = false
      }
      grid[i] = deadRow
    }
    initCoords.forEach((coord: Cell) => {
      grid[coord.row][coord.column] = true
    })

    return grid
  }

  // * Calculate the number of alive neighbors for this cell
  neighbors = (cell: Cell): number => {
    let aliveNeighbors = 0

    // Edge cases for cells on that are on corners or edges and can't safely access every neighbor

    // * TOP LEFT
    if (cell.row > 0 && cell.column > 0) {
      aliveNeighbors += this.board[cell.row - 1][cell.column - 1] ? 1 : 0
    }

    // * LEFT MIDDLE
    if (cell.column > 0) {
      aliveNeighbors += this.board[cell.row][cell.column - 1] ? 1 : 0
    }

    // * BOTTOM LEFT
    if (cell.row < this.board.length - 1 && cell.column > 0) {
      aliveNeighbors += this.board[cell.row + 1][cell.column - 1] ? 1 : 0
    }

    // * TOP MIDDLE
    if (cell.row > 0) {
      aliveNeighbors += this.board[cell.row - 1][cell.column] ? 1 : 0
    }

    // * BOTTOM MIDDLE
    if (cell.row < this.board.length - 1) {
      aliveNeighbors += this.board[cell.row + 1][cell.column] ? 1 : 0
    }

    // * TOP RIGHT
    if (cell.row > 0 && cell.column < this.board.length - 1) {
      aliveNeighbors += this.board[cell.row - 1][cell.column + 1] ? 1 : 0
    }

    // * RIGHT MIDDLE
    if (cell.column < this.board.length - 1) {
      aliveNeighbors += this.board[cell.row][cell.column + 1] ? 1 : 0
    }

    // * BOTTOM RIGHT
    if (
      cell.column < this.board.length - 1 &&
      cell.row < this.board.length - 1
    ) {
      aliveNeighbors += this.board[cell.row + 1][cell.column + 1] ? 1 : 0
    }

    return aliveNeighbors
  }

  // * Expands the existing board to include newRows many new rows
  expandGrid = (newRows: number): Array<Array<boolean>> => {

    let expandedGrid : Array<Array<boolean>> = new Array<Array<boolean>>(this.board.length);
    // * Copy over current board
    for (let i : number = 0; i < this.board.length; i++) {
      expandedGrid[i] = this.board[i];
    }


    for (let i : number = 0; i < this.board.length; i++) {
      for (let j : number = 0; j < newRows; j++) {
        expandedGrid[i].push(false)
      }
    }

    for (let i = 0; i < newRows; i++) {
      let newRow = new Array<boolean>(this.board.length + newRows)
      for (let j = 0; j < this.board.length + newRows; j++) {
        newRow[j] = false
      }
      expandedGrid.push(newRow)
    }

    return expandedGrid
  }

  shouldRessurectOutOfBoundsNeighbor = (cell : Cell) : boolean => {
    // * 4 cases for the 4 types of edges

    // * Top edge
    if (cell.row === 0 && cell.column > 0 && cell.column < this.board.length - 1) {
      if (this.board[cell.row][cell.column + 1] && this.board[cell.row][cell.column - 1]) {
        return true;
      }
    }

    // * Bottom edge
    if (cell.row === this.board.length - 1 && cell.column > 0 && cell.column < this.board.length - 1) {
      if (this.board[cell.row][cell.column + 1] && this.board[cell.row][cell.column - 1]) {
        return true;
      }
    }

    // * Left edge
    if (cell.column === 0 && cell.row > 0 && cell.row < this.board.length - 1) {
      if (this.board[cell.row + 1][cell.column] && this.board[cell.row - 1][cell.column]) {
        return true;
      }
    }

    // * Right edge
    if (cell.column === this.board.length - 1 && cell.row > 0 && cell.row < this.board.length - 1) {
      if (this.board[cell.row + 1][cell.column] && this.board[cell.row - 1][cell.column]) {
        return true;
      }
    }

    return false;
  }

  // * Needs to expand if new cells need to be created out of boundaries
  // * Need to check if any cells out of bounds could be resurrected.

  // * 
  tick = (): void => {


    let newBoard = new Array<Array<boolean>>(this.board.length)
    for (let i = 0; i < this.board.length; i++) {
      let newRow = new Array<boolean>(this.board.length)
      for (let j = 0; j < this.board.length; j++) {

        let currentCell : Cell = { row: i, column: j }
        let numNeighbors = this.neighbors(currentCell)

        if (this.shouldRessurectOutOfBoundsNeighbor(currentCell)) {
          newBoard = this.expandGrid(1);
          console.log("Expanded")
        }


        // * Check if this situation would ressurect a cell out of bounds, in which case we need to expand
        if (this.board[i][j] && (numNeighbors < 2 || numNeighbors > 3)) {
          newRow[j] = false
        } else if (!this.board[i][j] && numNeighbors === 3) {
          newRow[j] = true
        } else {
          newRow[j] = this.board[i][j]
        }
      }
      newBoard[i] = newRow
    }
    this.board = newBoard
    this.print()
  }

  print = (): void => {
    for (let i = 0; i < this.board.length; i++) {
      let rowStr = ''
      for (let j = 0; j < this.board.length; j++) {
        rowStr += this.board[i][j] ? ' * ' : ' . '
      }
      console.log(rowStr)
    }
  }
}

const runGameOfLife = (): void => {
  const initCells = [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 1, column: 3 },
  ]
  const numTicks = 10
  const game = new GameOfLife(initCells)

  for (let i = 0; i < numTicks; i++) {
    console.log('Game of life after ' + i + ' ticks')
    game.tick()
  }
}

runGameOfLife()
