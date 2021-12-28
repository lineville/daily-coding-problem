package main

import "testing"

func TestPrefixMapSum(t *testing.T) {
	prefixMapSum := PrefixMapSum{m: make(map[string]int)}
	prefixMapSum.insert("columnar", 3)
	prefixMapSum.insert("column", 2)
	result := prefixMapSum.sum("col")
	if result != 5 {
		t.Errorf("Expected 5, got %d", result)
	}
}
