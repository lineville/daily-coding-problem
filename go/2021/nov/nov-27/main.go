// * Daily Coding Problem November 27 2021

// * [Hard] -- Facebook

// Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.

package main

import "fmt"

// Returns min, max, numComparisons
func findMixMax(nums []int) (int, int, int) {
	numComparisons := 0
	if len(nums) < 2 {
		return nums[0], nums[0], numComparisons
	}

	min, max := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		numComparisons++
		if nums[i] < min {
			min = nums[i]
			continue
		}

		numComparisons++
		if nums[i] > max {
			max = nums[i]
			continue
		}
	}
	return min, max, numComparisons
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, -5, 10}
	fmt.Printf("Nums: %v\n",nums)

	min, max, cmps := findMixMax(nums)
	fmt.Printf("Min: %d, Max: %d, Comparisons: %d\n", min, max, cmps)
	fmt.Printf("Total Comparisons allowed: %d\n", 2 * (len(nums) - 2))
}