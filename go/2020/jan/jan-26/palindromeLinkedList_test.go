package palindromelinkedlist

import (
	"container/list"
	"testing"
)

func TestIsPalindrome1(t *testing.T) {
	linkedList := list.New()
	linkedList.PushFront(1)
	linkedList.PushFront(3)
	linkedList.PushFront(4)
	linkedList.PushFront(3)
	linkedList.PushFront(1)
	result := IsPalindrome(linkedList)
	if result == false {
		t.Error("Expected true, got ", result)
	}
}

func TestIsPalindrome2(t *testing.T) {
	linkedList := list.New()
	linkedList.PushFront(1)
	linkedList.PushFront(3)
	linkedList.PushFront(4)
	linkedList.PushFront(3)
	result := IsPalindrome(linkedList)
	if result == true {
		t.Error("Expected false, got ", result)
	}
}

func TestIsPalindrome3(t *testing.T) {
	linkedList := list.New()
	linkedList.PushFront(1)
	linkedList.PushFront(1)
	result := IsPalindrome(linkedList)
	if result == false {
		t.Error("Expected true, got ", result)
	}
}

func TestIsPalindrome4(t *testing.T) {
	linkedList := list.New()
	linkedList.PushFront(1)
	result := IsPalindrome(linkedList)
	if result == false {
		t.Error("Expected true, got ", result)
	}
}

func TestIsPalindrome5(t *testing.T) {
	linkedList := list.New()
	result := IsPalindrome(linkedList)
	if result == false {
		t.Error("Expected true, got ", result)
	}
}
