package main

import "testing"

func TestFindMinMax(t *testing.T) {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	min, max, cmps := findMixMax(nums)
	if min != 1 || max != 10 {
		t.Errorf("Expected min: 1, max: 10, got min: %v, max: %v", min, max)
	}

	comparisonsAllowed := 2 * (len(nums) - 2)
	if cmps >= comparisonsAllowed {
		t.Errorf("Expected less than %v comparisons, got %v", comparisonsAllowed, cmps)
	}
}