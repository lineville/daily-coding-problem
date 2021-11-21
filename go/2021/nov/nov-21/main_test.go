package main

import (
	"testing"
)

func TestWordDistance1(t *testing.T) {
	expected := 1
	actual := wordDistance("hello", "world", "dog cat hello cat dog dog hello cat world")
	if actual != expected {
		t.Errorf("Expected %d but got %d", expected, actual)
	}
}

func TestWordDistance2(t *testing.T) {
	expected := 2
	actual := wordDistance("hello", "world", "dog cat hello cat dog dog hello cat bird world")
	if actual != expected {
		t.Errorf("Expected %d but got %d", expected, actual)
	}
}

func TestWordDistance3(t *testing.T) {
	defer func() { recover() }()
	wordDistance("hello", "zombie", "dog cat hello cat dog dog hello cat bird world")
	t.Errorf("Did not panic")
}
