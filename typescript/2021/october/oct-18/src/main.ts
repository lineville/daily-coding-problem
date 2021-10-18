// * Daily Coding Problem October 18 2021

// * [Hard] -- Twitter

// A teacher must divide a class of students into two teams to play dodgeball.
// Unfortunately, not all the kids get along, and several refuse to be put on the same team as that of their enemies.

// Given an adjacency list of students and their enemies, write an algorithm that
// finds a satisfactory pair of teams, or returns False if none exists.

// Finds a partition of the students such that no two enemies are on the same team,
// or returns false if no such partition exists.
export const findTeams = (
    students: Map<number, number[]>
): [Set<number>, Set<number>] | boolean => {
    const team1: Set<number> = new Set();
    const team2: Set<number> = new Set();
    
    const team1Enemies: Set<number> = new Set();
    const team2Enemies: Set<number> = new Set();

    for (const [s, enemies] of students.entries()) {
        // Student does not belong to team 1 and is not an enemy of an existing team1 member
        if (!team1.has(s) && !team1Enemies.has(s)) {
            team1.add(s);
            for (const enemy of enemies) {
                team1Enemies.add(enemy);
            }
        } 
        // Student does not belong to team 2 and is not an enemy of an existing team2 member
        else if (!team2.has(s) && !team2Enemies.has(s)) {
            team2.add(s);
            for (const enemy of enemies) {
                team2Enemies.add(enemy);
            }
        } 
        // Student has an enemy on both teams, no partition is possible
        else {
            return false;
        }
    }

    return [team1, team2]
}



