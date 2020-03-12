// * Daily Coding Problem March 11th 2020

// * [Hard] -- Goldman-Sachs

// * Given a list of numbers L, implement a method sum(i, j)
// * which returns the sum from the sublist L[i:j] (including i, excluding j).

// ! Ex: given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.

// * Assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.

// ********************************
// * Simple function no preprocessing, no optimizations.
// ********************************
export function simpleSubListSum(list: number[], i: number, j: number): number {
  const subList = list.slice(i, j);
  const sum = subList.reduce((sum, item) => sum + item, 0);
  return sum;
}

// ********************************
// * More Advanced Implementation using TS interface, classes, and preprocessing
// ********************************

// * Defining interface so that we only expose public sum function
interface SliceAdder {
  sum(i: number, j: number): number;
}

export default class SumListSum implements SliceAdder {
  private list: number[];
  private sumGrid: number[][];

  constructor(list: number[]) {
    this.list = list;
    this.sumGrid = this.generateSumGrid();
  }

  // * Time: O(1) where N is
  public sum = (i: number, j: number): number => {
    return this.sumGrid[i][j];
  };

  // * Populates the internal grid that will represent all the possible sums of slices i to j
  // * this will result in sum only having to do one array lookup. More time efficient, less space efficient.
  generateSumGrid = (): number[][] => {
    let grid = new Array<Array<number>>();
    for (let i = 0; i < this.list.length; i++) {
      let row = [];
      for (let j = 0; j < this.list.length; j++) {
        row.push(this.calculateSum(i, j));
      }
      grid.push(row);
    }
    return grid;
  };

  // * Time: O(N) where N is size of slice i - j
  // * Space: O(1)
  private calculateSum = (i: number, j: number): number => {
    return this.list.slice(i, j).reduce((sum, item) => sum + item, 0);
  };
}
