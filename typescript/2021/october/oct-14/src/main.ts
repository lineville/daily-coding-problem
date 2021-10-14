// * Daily Coding Problem

// * [Easy] -- Microsoft

// Suppose an arithmetic expression is given as a binary tree.
// Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5

// You should return 45, as it is (3 + 2) * (4 + 5)

type Operator = '+' | '-' | '*' | '/'

type Term = Operator | number

export class ExpressionTree {
    value: Term
    left: ExpressionTree | null
    right: ExpressionTree | null

    constructor(value: Term) {
        this.value = value
        this.left = null
        this.right = null
    }

    addLeft(value: Term): ExpressionTree {
        this.left = new ExpressionTree(value)
        return this.left
    }

    addRight(value: Term): ExpressionTree {
        this.right = new ExpressionTree(value)
        return this.right
    }
}

export const evaluate = (root: ExpressionTree): Term => {
    if (root.left === null && root.right === null) {
        return root.value
    }

    if (root.left !== null && root.right !== null) {
        switch (root.value) {
            case '+':
                return add(evaluate(root.left), evaluate(root.right))
            case '-':
                return subtract(evaluate(root.left), evaluate(root.right))
            case '*':
                return multiply(evaluate(root.left), evaluate(root.right))
            case '/':
                return divide(evaluate(root.left), evaluate(root.right))
        }
    }
    return root.value
}

const add = (term1: Term, term2: Term): Term =>
    (term1 as number) + (term2 as number)
const subtract = (term1: Term, term2: Term): Term =>
    (term1 as number) - (term2 as number)
const multiply = (term1: Term, term2: Term): Term =>
    (term1 as number) * (term2 as number)
const divide = (term1: Term, term2: Term): Term =>
    (term1 as number) / (term2 as number)
