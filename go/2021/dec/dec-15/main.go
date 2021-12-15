// * Daily Coding Problem Dec 15 2021

// * [Medium] -- Google

// Implement integer exponentiation. That is, implement the pow(x, y) function,
// where x and y are integers and returns x^y.

// Do this faster than the naive method of repeated multiplication.

package main

import "fmt"

func pow(x int, y int) int {
	// Base case where y = 0, any int to the power of 0 equals 1
	if y == 0 {
		return 1
	}

	// Base case where y = 1, any int to the power of 1 equals itself
	if y == 1 {
		return x
	}

	// Recursive case where y is an even number, we can recursively subdivide in half
	if y%2 == 0 {
		return pow(x, y/2) * pow(x, y/2)
	}

	// Recursive case where y is an odd number, we can recursively divide by 2 and multiply by x once
	return pow(x, y/2) * pow(x, y/2) * x
}

func main() {
	x := 2
	y := 10
	fmt.Printf("%d^%d = %d\n", x, y, pow(x, y))
}
