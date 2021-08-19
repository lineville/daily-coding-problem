// * Daily Coding Problem August 19 2021

// * [Easy] -- Google

// In linear algebra, a Toeplitz matrix is one in which the elements
// on any given diagonal from top left to bottom right are identical.

// Ex: 
// 1 2 3 4 8
// 5 1 2 3 4
// 4 5 1 2 3
// 7 4 5 1 2

// Write a program to determine whether a given input is a Toeplitz matrix.

export const isToeplitzMatrix = (matrix: number[][]): boolean => {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
}