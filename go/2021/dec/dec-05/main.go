// * Daily Coding Problem Dec 5th 2021

// * [Easy] -- Bloomberg

// There are N prisoners standing in a circle, waiting to be executed.
// The executions are carried out starting with the kth person, and removing every
// successive kth person going clockwise until there is no one left.

// Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

// For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

// ! Constraint Bonus: Find an O(log N) solution if k = 2.

package main

import "fmt"

// O(n) time, O(n) space
func findSurvivorPosition(n int, k int) int {
	// Populate the array with the numbers 1 to n
	prisoners := make([]int, n)
	for i := 0; i < n; i++ {
		prisoners[i] = i + 1
	}

	nextDead := k - 1 // The next prisoner to get killed

	// Until there is one left keep killing the next prisoner
	for len(prisoners) > 1 {
		// Remove every kth prisoner and update nextDead accordingly
		prisoners = append(prisoners[:nextDead], prisoners[nextDead+1:]...)
		nextDead = (nextDead + k - 1) % len(prisoners)
	}

	// Return the last prisoner
	return prisoners[0]
}

func main() {
	n := 5
	k := 2
	result := findSurvivorPosition(n, k)
	fmt.Printf("%v prisoners, every %vth prisoner is executed. Last survivor is %v.\n", n, k, result)

}
