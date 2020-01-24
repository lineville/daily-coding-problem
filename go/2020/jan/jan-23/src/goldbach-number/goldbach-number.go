package goldbachnumber

import (
	"errors"
	"math"
)

func GoldbachNumberSmallestSolution(num int) ([]int, error) {
	allSolutions, _ := GoldbachNumbersAllSolutions(num)
	
	bestSolution := smallestSolution(allSolutions)
	return bestSolution, nil
}

func GoldbachNumbersAllSolutions(num int) ([][]int, error) {
	if (num <= 2 && num % 2 != 0) {
		return [][]int{}, errors.New("Number was not greater than 2 and even")
	}

	primes := generatePrimesUpTo(num)
	solutions := [][]int{}
	for i := 0; primes[i] <= (num / 2); i++ {
		diff := num - primes[i]
		if contains(primes, diff) {
			solutions = append(solutions, []int{primes[i], diff})
		}
	}

	return solutions, nil
}

func smallestSolution(solutions [][]int) []int {
	if len(solutions) == 0 {
		return []int{}
	}
	
	currentBest := solutions[0]
	for i := 1; i < len(solutions); i++ {
		// * [a,b] < [c,d] if : a < c OR a==c AND b < d.
		if solutions[i][0] <= currentBest[0] && solutions[i][1] < currentBest[1] {
			currentBest = solutions[i]
		}
	}
	return currentBest
}


func arrayEqual(a []int, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}

func contains(arr []int, num int) bool {
	found := false
	for _, val := range arr {
		if val == num {
			found = true
		}
	}
	return found
}

func generatePrimesUpTo(max int) []int {
	primes := []int{2}
	marked := make([]bool, max)

	for i := 1; i <= int((math.Sqrt(float64(max)) - 1) /2) ; i++ {
		for j := (i * (i + 1)) << 1; j <= max / 2; j = j + 2 * i + 1 {
			marked[j] = true
		}
	}

	for i := 0; i <= max / 2; i++ {
		if marked[i] == false {
			primes = append(primes, (2 * i) + 1)
		}
	}

	
	return primes
}