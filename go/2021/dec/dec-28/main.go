// * Daily Coding Problem Dec 28 2021

// * [Easy] -- Google

// Implement a PrefixMapSum class with the following methods:

// insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
// sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.

package main

import (
	"fmt"
	"strings"
)

type PrefixMapSum struct {
	m map[string]int
}

func (p *PrefixMapSum) insert(key string, value int) {
	p.m[key] = value
}

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
	prefixMapSum.insert("column", 2)
	fmt.Printf("%d\n", prefixMapSum.sum("col"))
}
