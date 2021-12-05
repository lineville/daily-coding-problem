package main

import "testing"

func TestFindSurvivorPosition(t *testing.T) {
	n := 5
	k := 2
	expected := 3
	actual := findSurvivorPosition(n, k)
	if actual != expected {
		t.Errorf("Expected %d, but got %d", expected, actual)
	}
}
