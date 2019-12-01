// Daily Coding Problem

// Nov 9 2019

// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.

// The list is very long, so making more than one pass is prohibitively expensive.

// Do this in constant space and in one pass.

class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null

  constructor(val: T) {
    this.value = val
    this.next = null
  }

  appendNode(node: LinkedListNode<T>): void {
    this.next = node
  }

  printNode(): void {
    console.log(this.value)
  }
}

const removeKthLastElement = (
  k: number,
  head: LinkedListNode<string>
): void => {}

const testNodeDelete = (): void => {
  const head: LinkedListNode<string> = new LinkedListNode<string>('HEAD')
  const a: LinkedListNode<string> = new LinkedListNode<string>('A')
  const b: LinkedListNode<string> = new LinkedListNode<string>('B')
  const c: LinkedListNode<string> = new LinkedListNode<string>('C')
  const d: LinkedListNode<string> = new LinkedListNode<string>('D')

  head.appendNode(a)
  a.appendNode(b)
  b.appendNode(c)
  c.appendNode(d)
}
