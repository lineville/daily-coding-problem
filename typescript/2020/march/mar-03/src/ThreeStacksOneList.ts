// * Daily Coding Problem March 3rd 2020

// * [Hard] -- Microsoft

// * Implement 3 stacks using one list that implements the following interface

// * 2 similar approaches:

// * a) Stacks 0 and 2 grow from either end of the array towards the middle, and stack 1 starts in the middle and grows
// * towards one end (the back) and if either stack 1 or 2 reached either end of the middle stack we need to shift the middle stack
// * so that the gap between middle stack and both other stacks are balanced.

// * b) Same setup with the three stacks but the wrinkle is that instead of shifting the entire middle stack when we reached it
// * is that the stack will grow in both directions alternating each side so that it will result in less shifting, but to access
// * the elements from middle stack we have to do a bit of calculating to find the right one.

// * Note: prefix ++var will update and then access it and postfix var++ will access then update

interface ITripleStack<T> {
  push: (value: T, stackId: number) => void;
  pop: (stackId: number) => T | undefined;
}

export default class TripleStack<T> implements ITripleStack<T> {
  private values: Array<T>;
  private firstTop: number;
  private middleBottom: number;
  private middleTop: number;
  private lastTop: number;

  constructor(size: number) {
    this.values = new Array<T>(size);
    this.firstTop = 0;
    this.lastTop = size - 1;
    this.middleBottom = Math.round(this.lastTop / 2);
    this.middleTop = Math.round(this.lastTop / 2);
  }

  push = (value: T, stackId: number): void => {
    switch (stackId) {
      case 0:
        this.values[this.firstTop++] = value;
        break;

      case 1:
        this.values[this.middleTop++] = value;
        break;

      case 2:
        this.values[this.lastTop--] = value;
        break;

      default:
        throw new Error("Invalid stack id");
    }
    this.adjustMiddleStack();
  };

  pop = (stackId: number): T | undefined => {
    switch (stackId) {
      case 0:
        return this.values[--this.firstTop];
      case 1:
        return this.values[--this.middleTop];
      case 2:
        return this.values[++this.lastTop];
      default:
        throw new Error("Invalid stack id");
    }
  };

  print = (): void => {
    console.log(this.values);
  };

  adjustMiddleStack = (): void => {
    if (this.firstTop > this.middleBottom) {
      const spacesToShift: number = Math.round(
        (this.lastTop - this.middleTop) / 2
      );
      for (let i = this.middleTop; i > this.middleBottom; i--) {
        this.values[i + spacesToShift] = this.values[i];
        delete this.values[i];
      }
      this.middleBottom += spacesToShift;
      this.middleTop += spacesToShift;
      console.log("After shift to right");
      this.print();
    }

    if (this.middleTop > this.lastTop) {
      const spacesToShift: number = Math.round(
        (this.middleBottom - this.firstTop) / 2
      );
      for (let i = this.middleBottom; i < this.middleTop; i++) {
        this.values[i - spacesToShift] = this.values[i];
        delete this.values[i];
      }
      this.middleBottom -= spacesToShift;
      this.middleTop -= spacesToShift;
      console.log("After shift to left");
      this.print();

    }
  };
}
