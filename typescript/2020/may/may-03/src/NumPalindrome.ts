// * Daily Coding Problem May 3rd 2020

// * Write a program that checks whether an integer is a palindrome.
// ! Ex:  121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

export const isPalindrome = (value: number): boolean => {
  if (value < 10) {
    return true
  }
  let digits = numDigits(value)
  let firstEqualsLast =
    Math.floor(value / Math.pow(10, digits - 1)) === value % 10
  return (
    firstEqualsLast &&
    isPalindrome(Math.floor(value / Math.pow(10, digits)) / 10)
  )
}

const numDigits = (num: number): number => {
  let count = 0
  if (num >= 1) ++count

  while (num / 10 >= 1) {
    num /= 10
    ++count
  }

  return count
}
