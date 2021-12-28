// * Daily Coding Problem Dec 28 2021

// * [Easy] -- Google

// Implement a PrefixMapSum class with the following methods:

// insert(key: str, value: int): Set a given key's value in the map.
// If the key already exists, overwrite the value.

// sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.

package main

import (
	"fmt"
	"strings"
)

type PrefixMapSum struct {
	m map[string]int
}

// O(1) time complexity insert/override
func (p *PrefixMapSum) insert(key string, value int) {
	p.m[key] = value
}

// O(N) where N is the number of keys in the map for sum
func (p *PrefixMapSum) sum(prefix string) int {
	sum := 0
	for k, v := range p.m {
		if strings.HasPrefix(k, prefix) {
			sum += v
		}
	}
	return sum
}

func main() {
	prefixMapSum := PrefixMapSum{m: make(map[string]int)}

	prefixMapSum.insert("columnar", 3)
	fmt.Println("Adding columnar with value 3")

	prefixMapSum.insert("column", 2)
	fmt.Println("Adding column with value 2")

	prefix := "column"
	fmt.Printf("Sum of %s: %d\n", prefix, prefixMapSum.sum(prefix)) // 5
}
