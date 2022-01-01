// * Daily Coding Problem Jan 1st 2022

// * [Medium] -- TripleByte

// You are given n numbers as well as n probabilities that sum up to 1.
// Write a function to generate one of the numbers with its corresponding probability.

// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2],
//  your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

// You can generate random numbers between 0 and 1 uniformly.

package main

import (
	"fmt"
	"math/rand"
	"time"
)

// Returns a random number from the given list of numbers with the probability of the corresponding index
func number_picker(nums []int, probabilities []float64) int {
	rand_seed := rand.Float64()

	accumulated_prob := 0.0
	for i, p := range probabilities {
		accumulated_prob += p
		if rand_seed <= accumulated_prob {
			return nums[i]
		}
	}
	return nums[len(nums)-1]
}

// Tests out the number picker trial many times and prints results
func test_number_picker(nums []int, probabilities []float64, trials int) {
	results := make(map[int]int)

	// Execute trials
	for i := 0; i < trials; i++ {
		num := number_picker(nums, probabilities)
		results[num]++
	}

	// Print results
	for _, num := range nums {
		fmt.Printf("%d: %d\n", num, results[num])
	}
}

// Main Driver code
func main() {
	rand.Seed(time.Now().UnixNano()) // Seed random number generator

	// Standard inputs
	nums := []int{1, 2, 3, 4}
	probabilities := []float64{0.1, 0.5, 0.2, 0.2}
	trials := 10000

	// Standard outputs
	fmt.Println("Fair Random Number Picker!")
	fmt.Printf("Nums: %v\nProbabilities: %v\n", nums, probabilities)
	fmt.Printf("Results after %d trials\n--------------------------------\n", trials)

	test_number_picker(nums, probabilities, trials)
}
