// * Daily Coding Problem

// * [Hard] -- Airbnb

// An 8-puzzle is a game played on a 3 x 3 board of tiles, with the ninth tile missing.
// The remaining tiles are labeled 1 through 8 but shuffled randomly.
// Tiles may slide horizontally or vertically into an empty space, but may not be removed from the board.

// Design a class to represent the board, and find a series of steps to bring the
// board to the state [[1, 2, 3], [4, 5, 6], [7, 8, None]].

export class Board {
    spaces: Array<Array<number | null>>
    emptySpace: [number, number] = [-1, -1]

    constructor() {
        const options = [1, 2, 3, 4, 5, 6, 7, 8, null]
        shuffleArray(options)
        this.spaces = []
        for (let i = 0; i < 3; i++) {
            this.spaces.push(options.slice(i * 3, i * 3 + 3))
        }

        for (const [i, row] of this.spaces.entries()) {
            for (const [j, space] of row.entries()) {
                if (space === null) {
                    this.emptySpace = [i, j]
                }
            }
        }
    }

    // This is the real crux of the problem -- how do we consistently chose the next
    // optimal piece to swap with with empty space?
    findPieceToSwap(i: number, j: number): [number, number] {
        if (i === 0 && j === 0) {
            return [i + 1, j]
        } else if (i === 0 && j === 1) {
            return [i, j - 1]
        } else if (i === 0 && j === 2) {
            return [i, j - 1]
        } else if (i === 1 && j === 0) {
            return [i - 1, j]
        } else if (i === 1 && j === 1) {
            return [i - 1, j]
        } else if (i === 1 && j === 2) {
            return [i + 1, j]
        } else if (i === 2 && j === 0) {
            return [i, j + 1]
        } else if (i === 2 && j === 1) {
            return [i - 1, j]
        } else if (i === 2 && j === 2) {
            return [i - 1, j]
        } else {
            return [-1, -1]
        }
    }

    playForNMoves(n: number) {
        for (let i = 0; i < n; i++) {
            this.movePiece()
        }
    }

    movePiece() {
        console.table(this.spaces)
        const [i, j] = this.emptySpace
        const [i2, j2] = this.findPieceToSwap(i, j)
        this.spaces[i][j] = this.spaces[i2][j2]
        this.spaces[i2][j2] = null
        this.emptySpace = [i2, j2]
    }

    isSolved(): boolean {
        const solution = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, null],
        ]
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.spaces[i][j] !== solution[i][j]) {
                    return false
                }
            }
        }
        return true
    }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<number | null>) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
