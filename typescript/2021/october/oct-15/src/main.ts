// * Daily Coding Problem Friday October 15

// * [Easy] -- Amazon

// Consider the following scenario: there are N mice and N holes placed at integer points along a line.
// Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.

// Each move consists of moving one mouse one unit to the left or right, and only one mouse can fit inside each hole.

// For example, suppose the mice are positioned at [1, 4, 9, 15], and the holes are located at [10, -5, 0, 16].
// In this case, the best pairing would require us to send the mouse at 1 to the hole at -5, so our function should return 6.

export const longestMouseMove = (mice: number[], holes: number[]): number => {
    // Sort the mice and holes to create the optimal mapping to minimize distance
    const sortedMice = mice.sort((a, b) => a - b);
    const sortedHoles = holes.sort((a, b) => a - b);

    // Return the largest distance that a mouse is to it's hole
    const distancesFromHoles = sortedMice.map((m, i) => Math.abs(m - sortedHoles[i]))
    return Math.max(...distancesFromHoles);

}