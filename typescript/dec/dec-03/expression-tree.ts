// * Daily Coding Problem Dec 3rd 2019

// * [Easy] -- Microsoft

// * Given the root to a Binary tree that represents an arithmetic expression, evaluate it.

// ! Ex: root to this tree

/*
 *         *
 *        / \
 *      +    +
 *     / \  / \
 *    3  2  4  5
 */

// * turns into  (3 + 2) * (4 + 5) => (5) * (9) => 45.

type Term = {
  kind: string; // * "num" or "op"
  value: number | string; // * 3 or *
};

type ArithmeticExpression = {
  operator: string;
  arg1: ArithmeticExpression | number;
  arg2: ArithmeticExpression | number;
};

class BinaryTree<T> {
  value: T;
  leftChild: BinaryTree<T> | null;
  rightChild: BinaryTree<T> | null;
  parent: BinaryTree<T> | null;

  // * Will only be constructed from the root down. This will only
  // * be called to create the root, then child nodes are appended.
  constructor(val: T) {
    this.value = val;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }

  addLeft = (val: T) => {
    let newChild = new BinaryTree<T>(val);
    newChild.parent = this;
    this.leftChild = newChild;
  };

  addRight = (val: T) => {
    let newChild = new BinaryTree<T>(val);
    newChild.parent = this;
    this.rightChild = newChild;
  };
}

// * An expression must be at least one operator and two args
const constructExpression = (tree: BinaryTree<Term>): ArithmeticExpression => {
  // * start at root and build up an expression
  if (tree.leftChild.value.kind == "num") {
    return {
      operator: <string>tree.value.value,
      arg1: <number>tree.leftChild.value.value,
      arg2: <number>tree.rightChild.value.value
    };
  } else {
    // * kind == "op" not a leaf node

    return {
      operator: <string>tree.value.value,
      arg1: <ArithmeticExpression>constructExpression(tree.leftChild),
      arg2: <ArithmeticExpression>constructExpression(tree.rightChild)
    };
  }
};

const evaluateExpression = (tree: BinaryTree<Term>): number => {
  if (tree.leftChild.value.kind === "num") {
    // * Base
    switch (tree.value.value) {
      case "+":
        return (
          <number>tree.leftChild.value.value +
          <number>tree.rightChild.value.value
        );
      case "-":
        return (
          <number>tree.leftChild.value.value -
          <number>tree.rightChild.value.value
        );
      case "*":
        return (
          <number>tree.leftChild.value.value *
          <number>tree.rightChild.value.value
        );
      case "*":
        return (
          <number>tree.leftChild.value.value *
          <number>tree.rightChild.value.value
        );
      default:
        throw new Error("Bad operator");
    }
  } else {
    switch (tree.value.value) {
      case "+":
        return (
          <number>evaluateExpression(tree.leftChild) +
          <number>evaluateExpression(tree.rightChild)
        );
      case "-":
        return (
          <number>evaluateExpression(tree.leftChild) -
          <number>evaluateExpression(tree.rightChild)
        );
      case "*":
        return (
          <number>evaluateExpression(tree.leftChild) *
          <number>evaluateExpression(tree.rightChild)
        );
      case "*":
        return (
          <number>evaluateExpression(tree.leftChild) *
          <number>evaluateExpression(tree.rightChild)
        );
      default:
        throw new Error("Bad operator");
    }
  }
};

const testExpressionTree = (): void => {
  let expressionTree = new BinaryTree<Term>({ value: "*", kind: "op" });

  expressionTree.addLeft({ value: "+", kind: "op" });
  expressionTree.addRight({ value: "+", kind: "op" });

  expressionTree.leftChild.addLeft({ value: 3, kind: "num" });
  expressionTree.leftChild.addRight({ value: 2, kind: "num" });

  expressionTree.rightChild.addLeft({ value: 4, kind: "num" });
  expressionTree.rightChild.addRight({ value: 5, kind: "num" });

  const result: number = evaluateExpression(expressionTree);
  const expectedResult: number = 45;

  console.log(result === expectedResult ? "Passed" : "Failed");
};

testExpressionTree();
