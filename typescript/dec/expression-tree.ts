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
  value: number | string; // * 3 or *
  kind: string; // * "num" or "op"
};

interface ArithmeticExpression {
  operator: string;
  arg1: ArithmeticExpression;
  arg2: ArithmeticExpression;
}

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

const evaluateExpression = (expression: BinaryTree<Term>): number => {
  let result: number = 0;

  return result;
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
