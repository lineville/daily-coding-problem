// * Daily Coding Problem March 4th 2020

// * [Hard] -- Google

// * You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string.
// * Determine whether the parentheses are balanced.

// ! Ex: "(()*" is balanced. "(*)" is balanced. ")*(" is not balanced.

export default function isBalanced(str: string): boolean {
  let low: number = 0;
  let high: number = 0;
  for (let i = 0; i < str.length; i++) {
    let ch : string = str[i];

    if (ch === '(') {
      low ++;
    } else {
      low--;
    }


    if (ch !== ')') {
      high++;
    } else {
      high--;
    }

    if (high < 0) break;
    low = Math.max(low, 0);
  }
  return low === 0;
}
