// * Daily Coding Problem Nov 28

// * Given a function rand5() that produces a random number between 1 and 5
// * Create a function rand7() that uses rand5() to compute random number 1..7

const testRand7 = (): void => {
  let result: number = rand7()
  console.log(
    result >= 1 && result <= 7 ? 'Passed: ' + result : 'Failed ' + result
  )
}

// * Produces random numbers in the range [1 ... 5]
const rand5 = (): number => {
  let result: number = Math.floor(Math.random() * Math.floor(5)) + 1
  return result
}

// * Produces random numbers in the range [1 ... 7] using rand5
const rand7 = (): number => {
  let num: number = 5 * rand5() + rand5() - 5
  if (num < 22) {
    return (num % 7) + 1
  }
  return rand7()
}

testRand7()
