// * Daily Coding Problem Dec 11 2021

// * [Easy] -- Palantir

// A researcher has index h if at least h of her N papers have h citations each.
//  If there are multiple h satisfying this formula, the maximum is chosen.

// For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5].
// Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

// Given a list of paper citations of a researcher, calculate their h-index.

package main

import "fmt"

// H Index of citations is the number of papers with at least h citations
func hIndex(citations []int) int {
	maxCitations := 0
	for _, c := range citations {
		if c > maxCitations {
			maxCitations = c
		}
	}

	hIndex := len(citations) // Best H index is the number of papers

	for hIndex > 0 { // Check if h-index is possible
		occurrencesOfNumAtLeastH := 0 // Number of papers with at least h citations
		for _, c := range citations {
			if c >= hIndex { // If citation is greater than or equal to h
				occurrencesOfNumAtLeastH++
			}
		}

		if occurrencesOfNumAtLeastH >= hIndex { // If number of papers with at least h citations is greater than or equal to h
			return hIndex
		}

		hIndex--
	}

	return 0
}

func main() {
	citations := []int{4, 3, 0, 1, 5}
	fmt.Printf("H Index %v --> %v\n", citations, hIndex(citations))
}
