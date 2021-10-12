package main

import "fmt"

func minimumDrinksToLearn(preferences map[int][]int) int {
	drinks := make(map[int][]int) // Reverse mapping of preferences
	covered := make(map[int]bool) // Customers that have been served
	result := 0                   // Total number of drinks learned to serve all the customers

	// Create reverse mapping of preferences e.g. drink => customers
	for customer, acceptableDrinks := range preferences {
		for _, drink := range acceptableDrinks {
			drinks[drink] = append(drinks[drink], customer)
		}
	}

	// While we have not covered all customers, keep learning the next optimal drink
	for len(covered) != len(preferences) {
		bestDrink := bestDrinkToLearn(drinks, covered) // Finds next best drink based on who's been covered and what's been learned
		coveredCustomers := drinks[bestDrink]          // Mark all customers covered by this drink as served
		for _, customer := range coveredCustomers {
			covered[customer] = true
		}
		delete(drinks, bestDrink) // Remove the drink from the list of drinks we can learn
		result++                  // Increase the number of drinks learned
	}

	return result
}

// Finds the next best drink to learn
func bestDrinkToLearn(drinks map[int][]int, covered map[int]bool) int {
	bestDrinkId := 0
	bestCustomerCoverage := 0

	for drinkId, customers := range drinks {
		thirstyCustomers := []int{}

		// Filtering all the customers by those who are not covered yet
		for _, c := range customers {
			served, exists := covered[c]
			if !exists || !served {
				thirstyCustomers = append(thirstyCustomers, c)
			}
		}

		// Found a new best drink
		if len(thirstyCustomers) > bestCustomerCoverage {
			bestDrinkId = drinkId
			bestCustomerCoverage = len(thirstyCustomers)
		}
	}
	return bestDrinkId
}

// Finds a pair of numbers that sum to target
func findPair(nums []int, target int) []int {
	m := make(map[int]bool)

	for _, num := range nums {
		diff := target - num
		_, exists := m[num]
		if exists {
			return []int{diff, num}
		}

		m[diff] = true
	}

	return []int{}
}

func main() {
	result := minimumDrinksToLearn(map[int][]int{
		0: {0, 1, 3, 6},
		1: {1, 4, 7},
		2: {2, 4, 7, 5},
		3: {3, 2, 5},
		4: {5, 8},
	})
	fmt.Println("Min Drinks: ", result)
}
