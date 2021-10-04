// * Daily Coding Problem September 17 2021

// * [Hard] -- Google

// Implement an LRU (Least Recently Used) cache. 
// It should be able to be initialized with a cache size n, and contain the following methods:

// set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item,
// then it should also remove the least recently used item.

// get(key): gets the value at key. If no such key exists, return null.

// Constraint: Each operation should run in O(1) time.

interface Cache {
    set(key: string, value: string): void;
    get(key: string): string | null;
}

interface IQueue<T> {
    enqueue(value: T): void;
    dequeue(): T | null;
}

class Queue<T> implements IQueue<T> {

    private _queue: Array<T>;

    constructor() {
        this._queue = [];
    }

    enqueue(value: T): void {
        this._queue.push(value);
    }

    dequeue(): T | null {
        return this._queue.shift() ?? null;
    }
    
}

export class LRUCache implements Cache {
    private _cache: { [key: string]: string }
    private _size: number
    private _queue: IQueue<string>

    constructor(size: number) {
        this._cache = {}
        this._size = size
        this._queue = new Queue<string>()
    }

    set(key: string, value: string): void {
        if (this._cache[key] !== undefined) {
            this._cache[key] = value
        } else if (this._size === Object.keys(this._cache).length) {
            // Cannot just get the smallest key need oldest
            const minKey = Object.keys(this._cache).reduce((min, key) => {
                return this._cache[key] < this._cache[min] ? key : min
            })
            delete this._cache[minKey]
        }
        this._cache[key] = value
    }

    get(key: string): string | null {
        return this._cache[key] ?? null
    }
}