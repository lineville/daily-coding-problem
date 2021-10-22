// Daily Coding Problem October 22 2021

// * [Medium] -- Glassdoor

// An imminent hurricane threatens the coastal town of Codeville.
// If at most two people can fit in a rescue boat, and the maximum
// weight limit for a given boat is k, determine how many boats will be needed to save everyone.

// For example, given a population with weights [100, 200, 150, 80] and a boat limit of 200,
// the smallest number of boats required will be three.

package main

import (
	"fmt"
	"sort"
)

func minimumNumberOfBoats(weights []int, boatLimit int) int {
	sort.Ints(weights)        // Sort the people in order of lightest to heaviest
	light := 0                // Pointer to the lightest person
	heavy := len(weights) - 1 // Pointer to the heaviest person
	boats := 0                // Number of boats needed

	// While there are still people to put in the boat
	for light < heavy {
		// Give the fatty a boat
		heavy--
		boats++

		// Fit the lightest person in the boat with the fatty if there's room
		if weights[heavy]+weights[light] <= boatLimit {
			light++
		}

	}

	return boats
}

func main() {
	weights := []int{100, 200, 150, 80}
	limit := 200
	fmt.Println(minimumNumberOfBoats(weights, limit))
}
