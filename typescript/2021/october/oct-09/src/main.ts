// * Daily Coding Problem October 9 2021

// * [Easy] -- Dropbox

// Spreadsheets often use this alphabetical encoding for its
// columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id.
// For example, given 1, return "A". Given 27, return "AA".

export const excelColumnName = (n: number, result: string = ''): string => {
    const ALPHABET_LENGTH = 26
    const ASCII_OFFSET = 65

    if (n <= ALPHABET_LENGTH) {
        return String.fromCharCode(ASCII_OFFSET + (n - 1)) + result
    } else {
        return excelColumnName(
            Math.floor((n - 1) / ALPHABET_LENGTH),
            String.fromCharCode(ASCII_OFFSET + ((n - 1) % ALPHABET_LENGTH)) + result
        )
    }
}
