// * Daily Coding Problem Nov 26 2019

/**
 * Implement a stack that has the following methods:
 * * push(val), which pushes an element onto the stack
 * * pop(), which pops off and returns the topmost element of the stack.
 * * If there are no elements in the stack, then it should throw an error or return null.
 * * max(), which returns the maximum value in the stack currently.
 * * If there are no elements in the stack, then it should throw an error or return null.
 */

class Stack<T> {
  stack: Array<T>;

  constructor(vals?: Array<T>) {
    this.stack = vals || [];
  }

  push = (val: T): void => {
    this.stack.push(val);
  };

  pop = (): T => {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack.pop();
  };

  peek = (): T => {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.stack.length - 1];
  };

  clear = (): void => {
    this.stack = [];
  };

  isEmpty = (): boolean => {
    return this.stack.length === 0;
  };

  max = (): T => {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    let max: T = this.stack[0];

    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] > max) {
        max = this.stack[i];
      }
    }
    return max;
  };

  print = (): void => {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  };
}

const testStack = (): void => {
  const s1 = new Stack([1, 5, 7, 25, 4, 9, 12]);

  const max = s1.max();

  console.log("Max: " + max);
};

testStack();
