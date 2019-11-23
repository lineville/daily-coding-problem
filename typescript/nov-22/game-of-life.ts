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
  row: number;
  column: number;
};

class GameOfLife {
  board: Array<Array<boolean>>;

  constructor(initCoords?: Array<Cell>) {
    this.board = this.populateGrid(initCoords) || new Array<Array<boolean>>();
  }

  populateGrid = (initCoords: Array<Cell>) => {
    // * Implement me
    return new Array<Array<boolean>>();
  };

  neighbors = (cell: Cell): number => {
    return 0;
  };

  tick = (): void => {};
}
