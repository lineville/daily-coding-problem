// *  Daily coding problem Nov 22 2019

// * Conway's game of life

/**
 * * Infinite 2d board (only display relevant cells -- ones that have live cells)
 * * Each cell is alive or dead, after each clock tick (iteration) the following rules get applied
 *
 * * 1. live cells with less than 2 neighbors or more than 3 neighbors die
 * * 2. live cells with 2 or 3 neighbors stay alive (nothing happens)
 * * 3. dead cells with exactly three neighbors becomes alive
 *
 * ! Neighbors are vertical, horizontal or diagonal
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

  constructor(initCoords?: Array<Cell>) {
    if (initCoords) {
      this.populateGrid(initCoords)
    } else {
      this.board = new Array<Array<boolean>>()
    }
  }

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

  populateGrid = (initCoords: Array<Cell>): void => {
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

    this.board = grid
  }

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

  expandGrid = (newRows: number): void => {
    // Add false columns to existing rows
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < newRows; j++) {
        this.board[i].push(false)
      }
    }

    // Add new rows
    for (let i = 0; i < newRows; i++) {
      let newRow = new Array<boolean>(this.board.length + newRows)
      for (let j = 0; j < this.board.length + newRows; j++) {
        newRow[j] = false
      }
      this.board.push(newRow)
    }
  }

  // * Needs to expand if new cells need to be created out of boundaries
  tick = (): void => {
    let newBoard = new Array<Array<boolean>>(this.board.length)
    for (let i = 0; i < this.board.length; i++) {
      let newRow = new Array<boolean>(this.board.length)
      for (let j = 0; j < this.board.length; j++) {
        let numNeighbors = this.neighbors({ row: i, column: j })
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
