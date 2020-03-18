// * Daily Coding Problem March 16 2020

// *************************************

// * [Easy] -- Amazon

// * Implement a stack API using only a heap

// * Stack interface
interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined; // * removes most recently added item.
  size(): number;
}

// * Heap interface
interface IHeap<T> {
  push(item: T): void;
  pop(): T | undefined; // * removes max value from heap.
  size(): number;
}

// * We just need to implement a heap that keeps track of the timestamp each item was
// * added and use that as the "max value" so that pop will behave like a stack.

type ValueContainer = { value: string };

export default class HeapStack<T extends ValueContainer> implements IStack<T> {
  private heap: IHeap<T>;

  constructor() {
    this.heap = new Heap<T>();
  }

  push(item: T): void {
    item.timestamp = Date.now();
    this.heap.push(item);
  }

  pop(): T | undefined {
    return this.heap.pop();
  }

  size(): number {
    return this.heap.size();
  }
}

class Heap<T extends ValueContainer> implements IHeap<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    const { timestamp } = item;
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }
}
