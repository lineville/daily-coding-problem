// * Removes the minimum number of characters to avoid three consecutive letters
// * Time Complexity: O(N) worst/best case loops over entire string
// * Space Complexity: O(N) constructs a second string the size of input -- could modify input
export const noThreeConsecutive = (str: string): string => {
  if (str.length === 0) {
    return str
  }

  let currentLetter: string = str[0]
  let currentStreak: number = 1
  let result: string = currentLetter

  // * O(N) -- N is length of str
  for (let i: number = 1; i < str.length; i++) {
    let next: string = str[i]
    if (next === currentLetter) {
      currentStreak++
      if (currentStreak < 3) {
        result += next
      }
    } else {
      currentStreak = 1
      currentLetter = next
      result += currentLetter
    }
  }

  return result
}
