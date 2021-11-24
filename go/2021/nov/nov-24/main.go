// * Daily Coding Problem November 24 2021

// * [Medium] -- Google

// Given a singly linked list and an integer k, remove the kth last element from the list. \
// k is guaranteed to be smaller than the length of the list.

// The list is very long, so making more than one pass is prohibitively expensive.

// Do this in constant space and in one pass.

package main

import "fmt"

// Node represents a node of linked list
type Node struct {
	value int
	next  *Node
}

// Insert inserts new node at the end of  from linked list
func (head *Node) Insert(val int) {
	n := Node{}
	n.value = val

	ptr := head
	for ptr.next != nil {
		ptr = ptr.next
	}
	ptr.next = &n
}

// Displays the linked list of nodes
func (head *Node) Display() {
	ptr := head
	for ptr != nil {
		fmt.Printf("%d -> ", ptr.value)
		ptr = ptr.next
	}
	fmt.Println("nil")
}

// Removes the kth last element from the linked list
func removeKthLast(head *Node, k int) {
	ptr := head
	for i := 0; i < k; i++ {
		ptr = ptr.next
	}

	ptr2 := head
	for ptr.next != nil {
		ptr2 = ptr2.next
		ptr = ptr.next
	}

	ptr2.next = ptr2.next.next
}

func main() {
	head := Node{value: 1}
	head.Insert(2)
	head.Insert(3)
	head.Insert(4)
	head.Insert(5)
	head.Display()

	k := 4
	fmt.Printf("Removing the %dth element from the last\n", k)
	removeKthLast(&head, k)

	head.Display()
}
