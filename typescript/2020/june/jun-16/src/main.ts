// * Daily Coding Problem June 16th 2020

// * [Medium] -- Dropbox

// * Given a list of words, determine whether the words can be chained to form a circle.
// * A word X can be placed in front of another word Y in a circle if the last character of X is same as the first character of Y.

// ! Ex: the words ['chair', 'height', 'racket', touch', 'tunic'] can make chair --> racket --> touch --> height --> tunic --> chair
// ! Ex: ['chair', 'height', 'racket', touch', 'tunnel'] => false tunnel cannot connect back to anything

export const isCycle = (words: string[]): boolean => {
  const firstLetters = words.map((word) => word.charAt(0)).sort()
  const lastLetters = words.map((word) => word.charAt(word.length - 1)).sort()
  return firstLetters.every((letter, i) => letter === lastLetters[i])
}
