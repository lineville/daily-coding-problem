class Stack<T> {
  items: Array<T>;

  constructor() {
    this.items = new Array<T>();
  }

  push = (val: T): void => {
    this.items.push(val);
  };

  pop = (): T => {
    return this.items.pop();
  };

  isEmpty = (): boolean => {
    return this.items.length === 0;
  };
}

export default Stack