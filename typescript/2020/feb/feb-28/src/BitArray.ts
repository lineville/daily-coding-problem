// * Daily Coding Problem Feb 28th 2020

// * [Medium] -- Amazon

// * Implement a bit array.

// * A bit array is a space efficient array that holds a value of 1 or 0 at each index.
// *
// * init(size): initialize the array with size
// * set(i, val): updates index at i with val where val is either 1 or 0.
// * get(i): gets the value at index i.

interface IBitArray {
  set(i: number, val: number): void;
  get(i: number): number;
  size() : number;
  // * We don't actually specify the constructor (ts convention)
}

export default class BitArray implements IBitArray {
  #bitArray: Array<number>;

  constructor(size: number) {
    this.#bitArray = new Array(size);
  }

  set = (index: number, value: number): void => {
    this.#bitArray[index] = value;
  };

  get = (index: number): number => {
    return this.#bitArray[index];
  };

  size = (): number => {
    return this.#bitArray.length;
  };
}
