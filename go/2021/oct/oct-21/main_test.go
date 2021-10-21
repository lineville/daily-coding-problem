package main

import (
	"testing"
)

func TestMaxProfit(t *testing.T) {
	prices := []int{9, 11, 8, 5, 7, 10}
	expected := 5
	result := maxProfit(prices)

	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}
