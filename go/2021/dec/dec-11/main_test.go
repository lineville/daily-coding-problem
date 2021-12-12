package main

import "testing"

func TestHIndex(t *testing.T) {
	citations := []int{4, 3, 0, 1, 5}
	hIndex := hIndex(citations)
	if hIndex != 3 {
		t.Errorf("hIndex(%v) = %d, expected %d", citations, hIndex, 3)
	}
}
