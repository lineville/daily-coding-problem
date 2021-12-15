package main

import "testing"

func TestPow(t *testing.T) {
	cases := []struct {
		x, y, expected int
	}{
		{2, 2, 4},
		{2, 3, 8},
		{2, 4, 16},
		{2, 5, 32},
		{2, 6, 64},
		{2, 7, 128},
	}

	for _, c := range cases {
		got := pow(c.x, c.y)
		if got != c.expected {
			t.Errorf("Pow(%d, %d) == %d, expected %d", c.x, c.y, got, c.expected)
		}
	}
}
