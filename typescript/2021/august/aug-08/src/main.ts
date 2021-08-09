// Daily Coding Problem August 8, 2021

// [Easy] -- Google

// The power set of a set is the set of all its subsets. 
// Write a function that, given a set, generates its power set.

// Ex: {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

// Returns the power set of a set
export const powerset = (set: number[]): number[][] => {
    let next = set.pop();
    if (!next) { // Base Case empty
        return [[]];
    } else { // Recursive case: insert popped value into all sets of previous powerset
        let previousPowerSet = powerset(set);
        return [...previousPowerSet, ...insertIntoAllSets(next, previousPowerSet)];
    }
}

// Insert value into each set of sets without disturbing existing sets
const insertIntoAllSets = (value: number, sets: number[][]): number[][] => {
    let result : number[][] = [];
    for (const set of sets) {
        result.push([...set, value]);
    }
    return result;
}

