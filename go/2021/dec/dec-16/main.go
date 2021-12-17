// * Daily Coding Problem Dec 16th 2021

// * [Medium] -- Facebook

// Given an integer n, find the next biggest integer with the same number of 1-bits on.
// For example, given the number 6 (0110 in binary), return 9 (1001).

package main

import (
	"fmt"
	"strconv"
)

// Counts the number of bits that are set to one in the binary representation of n
func setBitsCount(n int64) int {
	count := 0
	binary_n := strconv.FormatInt(n, 2)
	for bit := 0; bit < len(binary_n); bit++ {
		if binary_n[bit] == '1' {
			count++
		}
	}
	return count
}

// Returns the next biggest integer with the same number of bits set to one as n
func nextBiggestIntWithSameBitCount(n int64) (int64, error) {

	ogNumOneBits := setBitsCount(n) // Get the number of 1 bits in n

	// Keep trying the next biggest integer
	for nextBiggest := n + 1; nextBiggest < 1<<32; nextBiggest++ {
		numOneBits := setBitsCount(nextBiggest)

		// Found a solution -- a number with same bitcount as original n
		if numOneBits == ogNumOneBits {
			return nextBiggest, nil
		}

	}

	// Somehow we got to the end of all the integers and didn't find a number with the same bit count...
	return -1, fmt.Errorf("Integer overflow")
}

func main() {
	_, res := nextBiggestIntWithSameBitCount(6)
	fmt.Printf("%d --> %d\n", 6, res)
}
