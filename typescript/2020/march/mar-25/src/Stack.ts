class Stack<T> {
  items: Array<T>;

  constructor(values?: Array<T>) {
    this.items = new Array<T>();

    if (values) {
      values.forEach((value: T) => {
        this.items.push(value);
      });
    }
  }

  push = (val: T): void => {
    this.items.push(val);
  };

  pop = (): T | undefined => {
    if (this.isEmpty()) {
      throw new Error("Cannot pop an empty stack");
    }
    return this.items.pop();
  };

  isEmpty = (): boolean => {
    return this.items.length === 0;
  };

  toString = (): string => {
    return this.items.join(" ");
  };
}

export default Stack;
