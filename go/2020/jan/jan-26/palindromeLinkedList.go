package palindromelinkedlist

import "container/list"

// * Daily Coding Problem Jan 26 2020

// * [Easy] -- Google

// * Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

// ! Ex: 1 -> 3 -> 4 -> 3 -> 1 => true
// ! Ex: 1 -> 4 -> 5 => false

// IsPalindrome Determines if the given linked list is a palindrome
func IsPalindrome(linkedList *list.List) bool {

	listSize := linkedList.Len()
	elementsFromStart := 0
	front := linkedList.Front()
	back := linkedList.Back()

	// * We stop when we are halfway to the end since we are updating
	// * front and back pointers. Integer division (5 / 2) == 2 handles the
	// * odd length case where we can ignore that middle number and return true
	for elementsFromStart < (listSize / 2) {
		if front.Value != back.Value {
			return false
		}
		front = front.Next()
		back = back.Prev()
		elementsFromStart++
	}

	return true
}
