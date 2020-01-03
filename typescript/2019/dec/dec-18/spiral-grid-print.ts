// * Daily Coding Problem Wed Dec 18 2019

// * [Easy] -- Amazon

// * Given an M x N matrix, print out the values in a clockwise spiral

/**
 * [[1,  2,  3,  4,  5],
 * [6,  7,  8,  9,  10],
 * [11, 12, 13, 14, 15],
 * [16, 17, 18, 19, 20]]
 *
 * 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
 *
 */

const { arrayEquals, didTestPass } = require("./node_modules/simple-unit-test-utility")

const testSpiralPrint = (): void => {
  const input: Array<Array<number>> = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];

  const expected:Array<number> = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

  const result : Array<number> = spiralOrder(input);
  didTestPass(expected, result);
  
};

const spiralOrder = (grid : Array<Array<number>>) : Array<number> => {
    let result : Array<number> = [];
    const width : number = grid[0].length
    const height : number = grid.length
    const numCells : number = width * height;
    let visited
    
    while (result.length < numCells) {

    }

    return result
} 

testSpiralPrint();
