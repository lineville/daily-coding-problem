// * Daily Coding Problem September 16 2021

// * [Hard] -- Twitter

// You are given an array of length 24, where each element represents the number of new subscribers
//  during the corresponding hour. Implement a data structure that efficiently supports the following:

// update(hour: int, value: int): Increment the element at index hour by value.
// query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive).

// You can assume that all values get cleared at the end of the day, and that you will not be asked for start and
// end values that wrap around midnight.

// V1 Optimizes for fast updates and has slightly slower queries. 
// Each query will have to perform at most (end - start) lookups in the map (which is at most 24) so still very fast.
// Each update just updates one record in the map.

// V2 Optimizes for fast updates and has fast queries.
// Each query will just make two lookups in the map, but this relies on and assumes updates occur sequentially.
// Each update will perform one lookup and sets one record in the map, and relies on the updates happening sequentially

interface IDailySubscribers {
    update(hour: number, value: number) : void
    query(start: number, end: number): number
}

// This implementation has fast updates and slow queries
export class DailySubscribers implements IDailySubscribers {
    
    // Maps each hour to the number of subscribers gained during that hour
    private subs : Map<number, number> = new Map();
    
    // Updates the subscribers gained during the hour
    update(hour: number, value: number): void {
        this.subs.set(hour, this.subs.get(hour) ?? 0 + value);
    }

    // Returns the number of subscribers gained between the start and end hours
    // by traversing through all the keys in the map between the start and end
    query(start: number, end: number): number {
        let result = 0;
        for (let i = start; i <= end; i++) {
            result += this.subs.get(i) ?? 0;
        }
        return result;
    }

}

// This implementation has fast queries and fast updates
export class DailySubscribersV2 implements IDailySubscribers {
    // Maps each hour to the TOTAL number of subscribers gained up to that hour
    private subs: Map<number, number> = new Map()

    // Updates the total number of subscribers gained during the hour
    // This assumes hours are only updated in order 0, 1, 2 ... 23.
    update(hour: number, value: number): void {
        const subsBeforeHour = this.subs.get(hour - 1) ?? 0;
        this.subs.set(hour, subsBeforeHour + (this.subs.get(hour) ?? 0) + value);
    }

    // Gets the total number of subscribers gained between the start and end hours
    // By simply subtracting the total before the start from the total at end.
    query(start: number, end: number): number {
        const subsBeforeRange = this.subs.get(start - 1) ?? 0;
        const totalSubsNow = this.subs.get(end) ?? 0;
        return totalSubsNow - subsBeforeRange;
    }
}