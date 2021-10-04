// * Daily Coding Problem September 24 2021

// * [Medium] -- Uber

// One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.

// For a pattern to be valid, it must satisfy the following:

// All of its keys must be distinct.
// It must not connect two keys by jumping over a third key, unless that key has already been used.
// For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.

// Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.

// Checks if password is valid
export const isValidAndroidPassword = (password: number[]): boolean => {
    let usedNumbers = new Set()
    let previousDigit : number | null = null;
    for (const n of password) {
        if (usedNumbers.has(n)) {
            return false
        }
        if (previousDigit && !adjacentDigits(previousDigit, n) && !usedNumbers.has(numberToJump(previousDigit, n))) {
            return false;
        }
        usedNumbers.add(n);
        previousDigit = n;
    }
    return true
}

// Determines number that would be jumped going from previousDigit to nextDigit
const numberToJump = (previousDigit: number, nextDigit: number) : number => {
    switch (previousDigit) {
        case 1:
            return nextDigit === 7 ? 4 : 2;
        case 3:
            return nextDigit === 1 ? 2 : 6;
        case 7:
            return nextDigit === 1 ? 4 : 8;
        case 9:
            return nextDigit === 7 ? 8 : 6;
        default:
            return 5;
    }
}

// Creates the digit adjacency mapping
const digitAdjacencyMapping = () : Map<number, number[]> => {
    const map = new Map<number, number[]>();
    map.set(1, [2, 4, 5])
    map.set(2, [1, 3, 4, 5, 6])
    map.set(3, [2, 5, 6])
    map.set(4, [1, 2, 5, 7, 8])
    map.set(5, [1, 2, 3, 4, 6, 7, 8, 9])
    map.set(6, [2, 3, 5, 8, 9])
    map.set(7, [4, 5, 8])
    map.set(8, [4, 5, 6, 7, 9])
    map.set(9, [5, 6, 8])
    return map;
}

// Checks if two digits are adjacent
const adjacentDigits = (previousDigit: number, nextDigit: number) : boolean => {
    const adjacencyMapping = digitAdjacencyMapping();
    return (adjacencyMapping.get(previousDigit) ?? []).includes(nextDigit);
}

// Generates all possible passwords of length n
const generateAllPossiblePasswords = (n: number): number[][] => {
    let result: number[][] = []
    //TODO
    return result
}

// Returns the number of passwords of length n that are valid
export const allValidPasswordsOfLengthN = (n: number): number => {
    let passwords = generateAllPossiblePasswords(n)
    let validPasswordCount = passwords.filter((p) =>
        isValidAndroidPassword(p)
    ).length
    return validPasswordCount
}
