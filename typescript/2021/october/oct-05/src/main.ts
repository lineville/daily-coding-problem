// * Daily Coding Problem October 5th 2021

// * [Easy] -- Google

// Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

// For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.

export function isPalindrome<T>(list: DoublyLinkedList<T>): boolean {
    if (!list.head || !list.tail) {
        return true
    }
    return isPalindromeHelper(list.head, list.tail)
}

function isPalindromeHelper<T>(
    front: DoublyLinkedListNode<T> | null,
    back: DoublyLinkedListNode<T> | null
): boolean {
    if (!front?.next || !back?.previous) {
        return true
    }

    if (front?.value !== back?.value) {
        return false
    }
    return isPalindromeHelper(front.next, back.previous)
}

export class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T> | null
    tail: DoublyLinkedListNode<T> | null
    size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value: T) {
        const newNode = new DoublyLinkedListNode<T>(value)
        if (this.head === null || this.tail === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.size++
    }

    prepend(value: T) {
        const newNode = new DoublyLinkedListNode<T>(value)
        if (this.head === null || this.tail === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.previous = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++
    }
}

export class DoublyLinkedListNode<T> {
    value: T
    next: DoublyLinkedListNode<T> | null
    previous: DoublyLinkedListNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
        this.previous = null
    }

    append(value: T): DoublyLinkedListNode<T> {
        const newNode = new DoublyLinkedListNode<T>(value)
        this.next = newNode
        return newNode
    }

    prepend(value: T): DoublyLinkedListNode<T> {
        const newNode = new DoublyLinkedListNode<T>(value)
        this.previous = newNode
        return newNode
    }
}
