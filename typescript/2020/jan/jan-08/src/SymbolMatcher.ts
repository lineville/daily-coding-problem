// * Daily Coding Problem Jan 8th 2020

// * [Medium] -- Google ( Good one for coding lesson )

import Stack from "ts-data.stack";

// * Use a stack to push on open parens and pop off close parens.
// * At the end the number of symbols left in stack should be returned
export const numParensToRemove = (str: string): number => {
  let stack = new Stack<string>();

  // * Loop over the input string (perform the following block for each letter)
  for (let i: number = 0; i < str.length; i++) {
    // * Get the paren at the current index
    let paren: string = str[i];

    // * Switch on the different cases for paren value
    switch (paren) {
      // * If it is an open paren push it on the stack
      case "(":
        stack.push(paren);
        break;
      // * If it is a closed paren check the stack
      case ")":
        // * If stack has an open paren on the top, pop it off.
        // * Otherwise, push the closed paren on the stack.
        if (!stack.isEmpty() && stack.peek() === "(") {
          stack.pop();
        } else {
          stack.push(paren);
        }
        break;
      default:
        throw new Error("Not a paren!");
    }
  }
  return stack.count();
};
