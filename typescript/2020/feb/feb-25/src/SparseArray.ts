// * Daily Coding Problem Feb 25 2020

// ********************************

// * [Easy] -- Facebook

// * Given a large array of numbers that are mostly zeroes, implement a new
// * more space efficient implementation of the following interface for spare_array.

// * init(arr, size) -- The original less efficient array and it's size.
// * set(i, val) -- set value at index i to new val
// * get(i) -- get the value at index i

// * Example: arr = [100 0's ... 1, 2, 100 zeroes, 3,4,0,0,5,0,0....0,0,9]
// * We should provide a data structure that provides equivalent functionality
// * but uses less memory.

interface ISparceArray {
  get(index: number): number;
  set(index: number, value: number): void;
  size(): number;
  // * init is implemented as the constructor of SparseArray
}

export default class SparseArray implements ISparceArray {
  private map: Map<number, number>;
  private count: number;

  constructor(arr: Array<number>) {
    this.count = 0;
    this.map = new Map<number, number>();
    arr.forEach((idx: number, value: number) => {
      this.map.set(idx, value);
    });
  }

  get = (index: number): number => {
    let value: number | undefined = this.map.get(index);
    return value !== undefined ? value : 0;
  };

  set = (index: number, value: number): void => {
    this.map.set(index, value);
    this.count++;
  };

  size = (): number => {
    return this.count;
  };

  print = (): void => {
    this.map.forEach((key: number, value: number) => {
      console.log(`Key: ${key}, Value: ${value}`);
    });
  };
}
