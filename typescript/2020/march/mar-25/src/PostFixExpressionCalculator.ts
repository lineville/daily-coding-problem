// * Daily Coding Problem March 25 2020

// *********************************************

// * [Hard] -- JaneStreet

// * Given an arithmetic expression in Reverse Polish Notation (PostFix), write a program to evaluate it.

// * Defining explicit types for clarity

import Stack from "./Stack";

type Token = string | number;

export const postFixExpressionCalculator = (tokens: Array<Token>): number => {
  let stack = new Stack<Token>();

  tokens.forEach((token: Token, index: number) => {
    if (typeof token === "string") {
      // Is Operator
      let operand2 = stack.pop() as number;
      let operand1 = stack.pop() as number;
      let result = evaluateSimpleExpression(
        operand1,
        token as string,
        operand2
      );
      stack.push(result);
    } else {
      // Is Operand
      stack.push(token);
    }
  });

  return stack.pop() as number;
};

const evaluateSimpleExpression = (
  operand1: number,
  operator: string,
  operand2: number
): number => {
  switch (operator) {
    case "+": {
      return operand1 + operand2;
    }

    case "-": {
      return operand1 - operand2;
    }

    case "*": {
      return operand1 * operand2;
    }

    case "/": {
      return operand1 / operand2;
    }
    default: {
      throw new Error("Invalid operator");
    }
  }
};
