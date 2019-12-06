import Stack from "./stack";

// * Daily Coding Problem December 6th 2019

// * [Medium] -- Apple

/**
 * * Implement a queue using two stacks. Recall that a queue is a FIFO
 *  * (first-in, first-out) data structure with the following methods:
 *  * enqueue, which inserts an element into the queue, and dequeue,
 *  * which removes it.
 */

// * Use two stacks to make a Queue. This will make a costly dequeue but
// * a fast enqueue (you could do it either way).


class Queue<T> {
  stack1: Stack<T>;
  stack2: Stack<T>;

  constructor() {
    this.stack1 = new Stack<T>();
    this.stack2 = new Stack<T>();
  }

  // * Preserve that oldest item is on top of stack1
  // * This is the costly part O(N)
  enqueue = (val: T): void => {
    // * Push all of stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // * Push val on to stack1 so it is oldest value
    this.stack1.push(val);

    // * Put all of stack2 back to stack1 (preserves order)
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  };

  // * Just pop from stack1
  // * This is easy part O(1)
  dequeue = (): T => {
    return this.stack1.pop();
  };
}

const testQueue = (): void => {
  let queue = new Queue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.enqueue(6);
  console.log(queue.dequeue());

};

testQueue();
