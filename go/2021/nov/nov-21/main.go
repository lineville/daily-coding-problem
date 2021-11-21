// * Daily Coding Problem November 21 2021

// * [Hard]

// Find an efficient algorithm to find the smallest distance
// (measured in number of words) between any two given words in a string.

// For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world",
//  return 1 because there's only one word "cat" in between the two words.

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

//
func wordDistance(str1 string, str2 string, textContent string) int {
	words := strings.Split(textContent, " ") // split text into words
	wordLocations := make(map[string][]int)  // map of word to list of indexes within textContent

	// O(n) time for this bit to populate the wordLocations mapping
	for i, word := range words {
		wordLocations[word] = append(wordLocations[word], i)
	}

	str1Locations := wordLocations[str1]
	str2Locations := wordLocations[str2]
	// Panic if either word does not exist in the textContent
	if str1Locations == nil {
		panic(fmt.Sprintf("Word %s doesn't exist", str1))
	}

	if str2Locations == nil {
		panic(fmt.Sprintf("Word %s doesn't exist", str2))
	}

	minDistance := len(words)

	// O(i * j) where i is number of occurrences of str1 and j is number of occurrences of str2
	// Need to find the optimal pairing of these two words so need to check them all
	for _, str1Location := range str1Locations {
		for _, str2Location := range str2Locations {
			delta := Abs(str1Location - str2Location)
			if delta < minDistance {
				minDistance = delta - 1
			}
		}
	}
	return minDistance
}

// Abs returns the absolute value of x.
func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {
	fmt.Println("Word Distance Calculator")

	reader := bufio.NewReader(os.Stdin)

	// Read in the three text paramaters from the user
	fmt.Print("Enter text: ")
	textContent, _ := reader.ReadString('\n')
	textContent = strings.TrimSpace(textContent)

	fmt.Print("Enter first word: ")
	word1, _ := reader.ReadString('\n')
	word1 = strings.TrimSpace(word1)

	fmt.Print("Enter second word: ")
	word2, _ := reader.ReadString('\n')
	word2 = strings.TrimSpace(word2)

	fmt.Printf("Text: %s", textContent)
	fmt.Printf("Computing distance between %s and %s ...", word1, word2)

	fmt.Printf("Distance: %d", wordDistance(word1, word2, textContent))
}
