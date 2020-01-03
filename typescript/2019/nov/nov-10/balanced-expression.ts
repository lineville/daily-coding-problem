// Daily Coding Problem Nov 10 2019

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// ! EX: wellFormed("([])[]({})") => true
// ! EX: wellFormed("((()") => false
// ! EX: wellFormed("([)]") => false

class Stack<T> {
  stack: Array<T>;

  constructor() {
    this.stack = new Array<T>();
  }

  pop(): T {
    return this.stack.pop();
  }
  push(val: T): void {
    this.stack.push(val);
  }

  peek(): T {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

const wellFormed = (expression: string): boolean => {
  let stack: Stack<string> = new Stack<string>();

  for (let i = 0; i < expression.length; i++) {
    switch (expression[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(expression[i]);
        break;
      case ")":
      case "}":
      case "]":
        if (matches(stack.peek(), expression[i])) {
          stack.pop();
        }
        break;
      default:
        break;
    }
  }
  return stack.isEmpty();
};

const matches = (open: string, close: string): boolean => {
  if (open === "{") {
    return close === "}";
  }

  if (open === "[") {
    return close === "]";
  }

  if (open === "(") {
    return close === ")";
  }
  return false;
};

const testWellFormed = (): void => {
  const expression1: string = "([])[]({})";
  const expression2: string = "((()";
  const expression3: string = "([)]";

  const expectedResult1: boolean = true;
  const expectedResult2: boolean = false;
  const expectedResult3: boolean = false;

  const result1: boolean = wellFormed(expression1);
  const result2: boolean = wellFormed(expression2);
  const result3: boolean = wellFormed(expression3);

  console.log(expectedResult1 == result1 ? "Passed ✔️" : "Failed ❌");
  console.log(expectedResult2 == result2 ? "Passed ✔️" : "Failed ❌");
  console.log(expectedResult3 == result3 ? "Passed ✔️" : "Failed ❌");
};

testWellFormed();
