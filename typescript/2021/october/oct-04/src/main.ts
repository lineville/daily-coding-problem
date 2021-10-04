// * Daily Coding Problem October 4th 2021

// * [Medium] -- Google

// Given the head of a singly linked list, swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

export class LinkedListNode<T> {
    private value: T;
    next: LinkedListNode<T> | null;

    constructor(value: T) {
        this.value = value
        this.next = null
    }

    append(value: T) : LinkedListNode<T> {
        const newNode = new LinkedListNode<T>(value);
        this.next = newNode;
        return newNode;
    }

}

export function swapEveryOtherNode<T>(head: LinkedListNode<T> | null) : LinkedListNode<T> | null {

    // Base case
    if (!head || head.next === null) {
        return head;
    }

    // Grab the second node
    let newHead = head.next;

    // Point first node to third node
    head.next = newHead.next;

    // Point second node to original first node
    newHead.next = head;

    // Swap the rest of the nodes after the first two
    head.next = swapEveryOtherNode(head.next);

    // Return the second node as head
    return newHead;
}