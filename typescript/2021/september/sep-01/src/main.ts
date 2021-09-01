// * Daily Coding Problem September 1st, 2021

// * [Medium] -- Flipkart

// Snakes and Ladders is a game played on a 10 x 10 board, the goal of which is get from square 1 to square 100.
//  On each turn players will roll a six-sided die and move forward a number of spaces equal to the result.
// If they land on a square that represents a snake or ladder, they will be transported ahead or behind,
// respectively, to a new square.

// Find the smallest number of turns it takes to play snakes and ladders.

// Determines the fewest number of turns to complete snakes and ladders if player
// can chose what their dice roll is 1-6 to get the optimal path
export const leastNumTurns = (
    snakes: Map<number, number>,
    ladders: Map<number, number>,
    currentSquare: number = 1,
    moves: number = 0
): number => {
    if (currentSquare >= 100) { // Base case: Finished the game got to space 100
        return moves
    } else {
        
        // Determine which of the next 6 spaces is optimal to move to
        const nextSpaces = new Array<number>(6).fill(currentSquare).map((s, i) => s + i + 1)
        let nextBestSpace = nextSpaces[nextSpaces.length - 1] // Default to the last available space (roll 6)
        
        // For each of the 6 available spaces to move to
        for (let i = 5; i >= 0; i--) {
            const space = nextSpaces[i]
            
            // If the best space is going to a snake roll 1 less
            if (snakes.has(space) && space === nextBestSpace) {
                nextBestSpace--
            }

            // If one of the spaces is a ladder, update best space
            if (ladders.has(space)) {
                if (ladders.get(space) || 0 > nextBestSpace) {
                    nextBestSpace = ladders.get(space) || 0
                }
            }
        }
        // Recursive call with next space and one additional move
        return leastNumTurns(snakes, ladders, nextBestSpace, moves + 1)
    }
}
