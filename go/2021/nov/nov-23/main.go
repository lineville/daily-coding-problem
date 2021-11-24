// * Daily Coding Problem November 23 2021

// * [Medium] -- Twitter

// Given a list of numbers, create an algorithm that arranges
// them in order to form the largest possible integer.

// For example, given [10, 7, 76, 415], you should return 77641510.

package main

import (
	"fmt"
	"sort"
	"strconv"
)

func sortByDigits(nums []int) []int {
	stringified := make([]string, len(nums))
	for i, n := range nums {
		stringified[i] = strconv.Itoa(n)
	}
	sort.Strings(stringified) // TODO This sorting should put 7 before 76 but it doesn't ... If it did this would work
	result := make([]int, len(stringified))
	for i, s := range stringified {
		result[i], _ = strconv.Atoi(s)
	}
	return result
}

// Returns the largest possible integer from a list of numbers
func largestPossibleInteger(numbers []int) int {
	sortedNums := sortByDigits(numbers)
	currentSum := 0

	for _, n := range sortedNums {
		sumStr1 := strconv.Itoa(currentSum) + strconv.Itoa(n)
		sumStr2 := strconv.Itoa(n) + strconv.Itoa(currentSum)

		sum1, _ := strconv.Atoi(sumStr1)
		sum2, _ := strconv.Atoi(sumStr2)

		if sum1 > sum2 {
			currentSum = sum1
		} else {
			currentSum = sum2
		}
	}
	return currentSum / 10

}

func main() {
	// nums := []int{10, 7, 76, 415}
	numsSorted := []int{7, 76, 415, 10}
	result := largestPossibleInteger(numsSorted)
	fmt.Printf("Largest possible number out of %v --> %d\n", numsSorted, result)
}
