// * Daily Coding Problem Dec 25 2021

// * [Easy] -- Square

// Assume you have access to a function toss_biased()
// which returns 0 or 1 with a probability that's not
// 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

package main

import (
	"fmt"
	"math/rand"
)

// Returns a 1 70% of the time and 0 30% of the time
func toss_biased() int {
	randFloat := rand.Float64()
	if randFloat < 0.4 {
		return 1
	} else {
		return 0
	}
}

// 0 = 0.6 prob
// 1 = 0.4 prob

// 0, 1 = 0.6 * 0.4 = .24
// 1, 0 = 0.4 * 0.6 = .24
// 0, 0 = 0.6 * 0.6 = .36
// 1, 1 = 0.4 * 0.4 = .16

func toss_unbiased() int {
	firstToss := toss_biased()
	secondToss := toss_biased()
	if firstToss == 0 && secondToss == 1 {
		return 1
	}

	if firstToss == 1 && secondToss == 0 {
		return 0
	}

	return toss_unbiased()
}

func main() {
	for i := 0; i < 10; i++ {
		fmt.Printf("%d\n", toss_unbiased())
	}

}
