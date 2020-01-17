// * Daily Coding Problem Jan 8th 2020

// * [Medium] -- Google ( Good one for coding lesson )

import Stack from 'ts-data.stack'

// * Use a stack to push on open parens and pop off close parens.
// * At the end the number of symbols left in stack should be returned
export const numParensToRemove = (inputString: string): number => {
  let stack: Stack<string> = new Stack<string>()

  // * Execute this block of code inputString.length times
  for (let i: number = 0; i < inputString.length; i++) {
    let paren: string = inputString[i]

    if (paren !== ')' && paren !== '(') {
      throw new Error('Not a paren!')
    }

    if (paren === ')') {
      if (!stack.isEmpty() && stack.peek() === '(') {
        stack.pop()
      } else {
        stack.push(paren)
      }
    } else {
      stack.push(paren)
    }
  }

  return stack.count()
}

const input: string = '(((()(()()()))))'
const result: number = numParensToRemove(input)
console.log(result)
