// * Daily Coding Problem October 21 2021

// * [Easy] -- Facebook

// Given a array of numbers representing the stock prices of a company in chronological order,
// write a function that calculates the maximum profit you could have made from buying and selling
// that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock
// at 5 dollars and sell it at 10 dollars.

package main

import "fmt"

func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}

	min := prices[0]
	max := 0

	for i := 1; i < len(prices); i++ {
		if prices[i] < min {
			min = prices[i]
		}
		if prices[i]-min > max {
			max = prices[i] - min
		}
	}
	return max
}

func main() {
	prices := []int{9, 11, 8, 5, 7, 10}
	fmt.Println(maxProfit(prices))
}
