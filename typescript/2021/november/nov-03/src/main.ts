// * Daily Coding Problem November 3rd 2021

// * [Hard] -- Google

// Implement an LFU (Least Frequently Used) cache.
// It should be able to be initialized with a cache size n, and contain the following methods:

// * set(key, value): sets key to value.

// If there are already n items in the cache and we are adding a new item,
// then it should also remove the least frequently used item.
// If there is a tie, then the least recently used key should be removed.

// * get(key): gets the value at key. If no such key exists, return null.

// ! Constraint: Each operation should run in O(1) time.

// Resource for pseudocode: http://dhruvbird.com/lfu.pdf

export interface LFUCache<T> {
    set(key: T, value: T): void
    get(key: T): T | null
}

type FrequencyNode<T> = {
    value: number
    items: Set<T>
    prev: FrequencyNode<T> | null
    next: FrequencyNode<T> | null
}

type LFUItem<T> = {
    data: T
    parent: FrequencyNode<T>
}

export class LFUCache<T> implements LFUCache<T> {
    private keys: Map<T, LFUItem<T>>
    private freq_head: FrequencyNode<T>

    constructor() {
        this.keys = new Map()
        this.freq_head = { value: 0, items: new Set(), prev: null, next: null }
    }

    // Gets a new frequency node
    getNewNode(
        value: number,
        prev: FrequencyNode<T> | null,
        next: FrequencyNode<T> | null
    ): FrequencyNode<T> {
        let newNode: FrequencyNode<T> = { value, items: new Set(), prev, next }
        if (prev) prev.next = newNode
        if (next) next.prev = newNode
        return newNode
    }

    // Deletes a frequency node
    deleteNode(node: FrequencyNode<T>) {
        if (node && node.prev) {
            node.prev.next = node.next
        }

        if (node && node.next) {
            node.next.prev = node.prev
        }
    }

    // Gets the value at key
    get(key: T): T | null {
        let temp = this.keys.get(key)
        if (!temp) {
            return null
        }

        let freq = temp.parent
        let next_freq = freq.next

        if (
            next_freq?.value === this.freq_head.value ||
            next_freq?.value !== freq.value + 1
        ) {
            next_freq = this.getNewNode(freq.value + 1, freq, next_freq)
        }
        next_freq.items.add(key)
        temp.parent = next_freq

        freq.items.delete(key)
        if (freq.items.size === 0) {
            this.deleteNode(freq)
        }
        return temp.data
    }

    // Inserts a new item in the cache
    set(key: T, value: T): void {
        if (this.keys.has(key)) {
            return
        }

        let freq = this.freq_head.next
        if (freq?.value !== 1) {
            freq = this.getNewNode(1, this.freq_head, freq)
        }

        freq.items.add(key)
        this.keys.set(key, { data: value, parent: freq })
    }

    // Gets the lest frequently used item in the cache
    getLFUItem(): T | null {
        if (this.keys.size === 0) {
            return null
        }
        let lfuItems = this.freq_head.next?.items
        if (!lfuItems || lfuItems.size === 0) {
            return null
        }

        let firstItem = lfuItems.values().next().value

        return this.keys.get(firstItem)?.data ?? null
    }
}
