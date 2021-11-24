package main

import "testing"

func TestRemoveKthLast(t *testing.T) {
	head := &Node{}
	head.Insert(1)
	head.Insert(2)
	head.Insert(3)
	head.Insert(4)
	head.Insert(5)
	head.Insert(6)

	removeKthLast(head, 3)

	ptr := head
	for ptr.next != nil {
		if ptr.value == 4 {
			t.Error("Expected 4 to be removed")
		}
		ptr = ptr.next
	}

}
