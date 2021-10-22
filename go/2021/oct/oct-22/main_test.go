package main

import (
	"testing"
)

func TestMinimumNumberOfBoats(t *testing.T) {

	weights := []int{100, 200, 150, 80}
	expected := 3
	result := minimumNumberOfBoats(weights, 200)

	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}
