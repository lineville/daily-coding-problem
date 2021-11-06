// * Daily Coding Problem November 6 2021

// * [Easy] -- Google

// Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

export const canShift = (a: string, b: string): boolean => {
    // Not the same length, can't possibly be equal after shifts
    if (a.length !== b.length) {
        return false
    }

    // Strings are equal already
    if (a === b) {
        return true
    }

    let shiftedB = shiftString(b) // Shift first letter of b to front
    
    // Perform at most a.length many shifts
    for (let i = 0; i < a.length; i++) {
        shiftedB = shiftString(shiftedB)
        if (shiftedB === a) {
            return true
        }
    }
    return false

}

const shiftString = (str: string): string => {
    if (str.length < 2) {
        return str
    }

    const letters = str.split('')
    const firstLetter = letters.shift() ?? ''
    letters.push(firstLetter)
    return letters.join('')
}
