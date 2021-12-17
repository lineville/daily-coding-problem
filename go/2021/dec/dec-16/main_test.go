package main

import "testing"

func TestNextBiggestIntWithSameBits(t *testing.T) {
	type test struct {
		input  int64
		output int64
	}

	tests := []test{
		{6, 9},
		{9, 10},
		{10, 12},
	}

	for _, test := range tests {
		res, _ := nextBiggestIntWithSameBitCount(test.input)
		if res != test.output {
			t.Errorf("nextBiggestIntWithSameBits(%d) = %d, want %d", test.input, res, test.output)
		}
	}

}
