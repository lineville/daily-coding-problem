package main

import "testing"

func TestLargestPossibleInteger(t *testing.T) {
	testCases := []struct {
		input []int
		want  int
	}{
		{[]int{10, 7, 76, 415}, 77641510},
		// {[]int{10, 7, 76, 415, 1}, 77641511},
		// {[]int{10, 7, 76, 415, 1, 2}, 77641512},
	}

	for _, tc := range testCases {
		got := largestPossibleInteger(tc.input)
		if got != tc.want {
			t.Errorf("largestPossibleInteger(%v) == %v, want %v", tc.input, got, tc.want)
		}
	}
}
