// * Daily Coding Problem Dec 23 2021

// [Easy] -- Amazon

// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack.
// If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently.
// If there are no elements in the stack, then it should throw an error or return null.
// Each method should run in constant time.

package main

import "errors"

type Item struct {
	value int
	next  *Item
}

// Should also have  priority queue of items
type Stack struct {
	top  *Item
	size int
	max  *Item
}

// Push element onto stack and maybe update max
func push(val int, stack *Stack) {
	new_top := &Item{value: val, next: stack.top}
	if new_top.value > stack.max.value {
		stack.max = new_top
	}
	stack.top = new_top
	stack.size++
}

// Pop element from stack and maybe update max
// This needs to search through stack to find next biggest... not O(1)
func pop(stack *Stack) (int, error) {
	if stack.size == 0 {
		return -1, errors.New("Stack is empty")
	}
	val := stack.top.value
	stack.top = stack.top.next
	stack.size--
	return val, nil
}

// Return max value in stack
func max(stack *Stack) (int, error) {
	if stack.size == 0 {
		return -1, errors.New("Stack is empty")
	}
	return stack.max.value, nil
}
