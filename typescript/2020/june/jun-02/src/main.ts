// * Daily Coding Problem June 2nd 2020

// * [Easy] -- Google

// * Implement a PrefixMapSum class with the following methods:

// * insert(key: string, value: int) -- sets the value of key
// * sum(prefix: string) -- returns the sum of all values of keys beginning with prefix

export default class PrefixMapSum {
  private map: Map<string, number>;

  constructor() {
    this.map = new Map<string, number>();
  }

  insert = (key: string, value: number) => {
    this.map.set(key, value);
  };

  sum = (prefix: string) => {
    let result = 0;

    for (const [key, value] of this.map.entries()) {
      if (key.slice(0, prefix.length) === prefix) {
        result += value;
      }
    }
    return result;
  };
}
