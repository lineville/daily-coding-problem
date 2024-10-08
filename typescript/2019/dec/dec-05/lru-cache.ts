import Queue from "./queue";

// * Daily Coding Problem Dec 5th 2019

// * [Hard] -- Google

/**
 * * Implement an LRU (Least Recently Used) cache. It should be able to
 * * be initialized with a cache size n, and contain the following methods:

 * * set(key, value): sets key to value. If there are already n items 
 * * in the cache and we are adding a new item, then it should also 
 * * remove the least recently used item.

 * * get(key): gets the value at key. If no such key exists, return null.
 */

// ! Each operation should run in O(1) time.

// * Approach is to use an object to model the cache of a fixed size.
// * Getting an entry should be like fetching an item from an object with key.
// * Setting a new value in the cache can be as simple as adding a new
// * entry in an object or as complicated as having to replace the entry
// * that has been there the longest

// * Use a Queue which will add size but no time (which I guess is the point) ?

class LRUCache<T> {
  memory: Object;
  queue: Queue<{ key: number; value: T }>;
  full: boolean;
  maxSize: number;
  allocatedMemory: number;

  constructor(size: number) {
    this.memory = {};
    this.queue = new Queue<{ key: number; value: T }>();
    this.maxSize = size;
    this.allocatedMemory = 0;
  }

  // * Clears the cache back to original state
  clear = (): void => {
    this.memory = {};
    this.queue = new Queue<{ key: number; value: T }>();
    this.allocatedMemory = 0;
  };

  // * Gets the value from the cache using the key.
  // * If the key does not exist in cache null is returned.
  // * O(1) access time just accessing JS Object
  get = (key: number): T => {
    return this.memory[key] ? this.memory[key] : null;
  };

  // * Sets the value in the cache at this key with this value.
  // * If we are full and not updating an existing entry
  // * then evict the oldest (front of queue)
  // * Regardless, add this data to our queue and set the value in memory.
  // * Also check to see if we are full and set the full flag.
  // * O(1) to set and update values
  set = (key: number, value: T): void => {
    let existingValue = this.get(key);
    if (this.allocatedMemory === this.maxSize && existingValue === null) {
      let evicted = this.queue.dequeue();
      delete this.memory[evicted.key];
      console.log("Evicted: " + evicted.key + " -> " + evicted.value);
    }

    // * Add new data to back of queue
    this.queue.enqueue({ key, value });
    this.memory[key] = value;

    // * If we added a new entry to cache, update allocated
    if (this.allocatedMemory < this.maxSize && existingValue === null) {
      this.allocatedMemory++;
    }
  };

  // * Print out the contents of memory
  print = (): void => {
    console.log(
      "Cache -- Size: " +
        this.maxSize +
        " Allocated: " +
        this.allocatedMemory +
        "\n------------------------\n"
    );

    // * O(N) where N is size of the cache
    Object.entries(this.memory).forEach(data => {
      console.log(data);
    });
  };
}

const testLRUCache = (): void => {
  let cache = new LRUCache(10);

  cache.set(0, "A");
  cache.set(1, "B");
  cache.set(2, "C");
  cache.set(3, "D");
  cache.set(4, "E");
  cache.set(5, "F");
  cache.set(6, "G");
  cache.set(7, "H");
  cache.set(8, "I");
  cache.set(9, "J");
  cache.print();

  cache.set(10, "NEW");
  cache.print();

  cache.set(5, "Five");
  cache.print();

  cache.clear();
  cache.print();

  cache.set(0, "A");
  cache.set(1, "B");
  cache.set(2, "C");
  cache.set(3, "D");
  cache.set(4, "E");
  cache.set(5, "F");

  cache.print();

  cache.set(4, "Four");
  cache.print();
};

testLRUCache();
