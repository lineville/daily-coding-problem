// * Daily Coding Problem June 12 2020

import { assert } from "chai";

// * [Hard] -- Twitter

// * You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour.
// * Implement a data structure that efficiently supports the following:

// * update(hour: int, value: int): Increment the element at index hour by value.
// * query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive).
// * You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.

export default class Subscribers {
  private subscribers: Map<number, number>;

  /**
   *
   * 0 => 10
   * 1 => 15
   * 2 => 19
   * 3 => 69
   * ...
   *
   * 23 => 500
   * @param dailyData
   */

  // * It is expected that dailyData be length 24 and each entry is the number of new subscribers during that hour
  constructor(dailyData: Array<number>) {
    this.subscribers = new Map<number, number>();
    let totalSubs = 0;
    for (const [hour, subs] of dailyData.entries()) {
      totalSubs += subs;
      this.subscribers.set(hour, totalSubs);
    }
  }

  // * Update is O(N) in theory but in practice is very efficient. We are only ever going to iterate over
  // * the entries from hour and later. Since we are probably going to be updating things chronologically, it seems
  // * like we will always be just updating the last entry in the map and won't need to loop at all. Even if we do have to loop
  // * it is still a fixed 24 entries so O(anything) is pretty trivial
  update = (hour: number, subs: number): void => {
    // * Map -> Array -> Filter hours equal or after hour -> Map
    const hoursToUpdate = new Map(
      [...this.subscribers].filter(([h, _]) => h >= hour)
    );
    for (const [h, subs] of hoursToUpdate) {
      this.subscribers.set(h, (this.subscribers.get(h) || 0) + subs);
    }
  };

  // * Query is very efficient O(1)
  query = (start: number, end: number): number => {
    if (start > end) {
      throw new Error("Start hour must be less than or equal to end hour");
    }
    return (
      (this.subscribers.get(end) || 0) - (this.subscribers.get(start - 1) || 0)
    );
  };

  // * Displays the data in the subscribers map
  display = (): void => {
    for (const [hour, subscribers] of this.subscribers) {
      console.log(
        `Hour: ${hour} -- New subs : ${this.query(
          hour,
          hour
        )} -- Total : ${subscribers}\n`
      );
    }
  };
}
