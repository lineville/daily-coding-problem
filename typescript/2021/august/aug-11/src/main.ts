// * Daily Coding Problem August 11 2021

// [Hard] -- AirBnB

// You come across a dictionary of sorted words in a language you've never seen before.
// Write a program that returns the correct order of letters in this language.

// Ex:  ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].

// Returns an ordered array of characters representing the order of the language
// based on the order of the given words that are known to be sorted
export const letterOrder = (words: string[]): string[] => {
  let result: string[] = [] // order of letters in the language
  let foundLetters: Set<string> = new Set()

  // For each pair of words
  for (let i = 0; i < words.length - 1; i++) {
    const [charBefore, charAfter] = letterComparison(words[i], words[i + 1])

    // If we haven't seen either letter before push both to back and mark seen
    if (!foundLetters.has(charBefore) && !foundLetters.has(charAfter)) {
      foundLetters.add(charBefore)
      foundLetters.add(charAfter)
      result.push(charBefore)
      result.push(charAfter)
    } else if (!foundLetters.has(charBefore)) { // If we've seen charAfter but not charBefore
      // Stick charBefore before charAfter
      foundLetters.add(charBefore)
      const idxToInsert = result.indexOf(charAfter)
      result.splice(idxToInsert, 0, charBefore)
    } else if (!foundLetters.has(charAfter)) { // If we've seen charBefore but not charAfter
      // Stick charAfter after charBefore
      foundLetters.add(charAfter)
      const idxToInsert = result.indexOf(charBefore) + 1
      result.splice(idxToInsert, 0, charAfter)
    }
    // If we've seen both letters before, we don't need to do anything
    // TODO verify this is correct maybe need to swap the two if both exist but somehow misordered...
    
  }
  return result
}

// Given two words where wordBefore comes before wordAfter in our language return a tuple of the garnered
// knowledge about the relationship between the two words. The result tuple will be of the form: [charBefore, charAfter]
// representing that we know charBefore comes before charAfter.
const letterComparison = (wordBefore: string, wordAfter: string): [string, string] => {
  for (let i = 0; i < wordBefore.length; i++) {
    if (i < wordAfter.length && wordBefore[i] !== wordAfter[i]) {
      return [wordBefore[i], wordAfter[i]]
    }
  }
  return ['', '']
}
