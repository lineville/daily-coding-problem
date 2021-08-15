// * Daily Coding Problem August 14 2021

// * [Easy] -- Riot Games

// Design and implement a HitCounter class that keeps track of requests (or hits). 
// It should support the following operations:

// record(timestamp): records a hit that happened at timestamp
// total(): returns the total number of hits recorded
// range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)

// Constraint: Optimize for space (memory)

export default class HitCounter {

    totalHits: number;
    hitTimestamps: Set<number>;

    constructor() {
        this.totalHits = 0;
        this.hitTimestamps = new Set<number>();
    }

    record(timestamp: number) {
        this.totalHits++;
        this.hitTimestamps.add(timestamp);
    }

    total() : number { 
        return this.totalHits;
    }

    range(lower: number, upper: number) : number {
        let count = 0;
        for (const timestamp of this.hitTimestamps) {
            if (timestamp >= lower && timestamp <= upper) {
                count++;
            }
        }
        return count;
    }
}