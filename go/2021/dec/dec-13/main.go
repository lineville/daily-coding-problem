// * Daily Coding Problem Dec 13 2021

// * [Easy] -- Microsoft

// Given a 2D matrix of characters and a target word,
//  write a function that returns whether the word can
//  be found in the matrix by going left-to-right, or up-to-down.

// For example, given the following matrix:

// [['F', 'A', 'C', 'I'],
//  ['O', 'B', 'Q', 'P'],
//  ['A', 'N', 'O', 'B'],
//  ['M', 'A', 'S', 'S']]

// and the target word 'FOAM', you should return true, since
// it's the leftmost column. Similarly, given the target word 'MASS',
//  you should return true, since it's the last row.

package main

import "fmt"

func findWord(matrix [][]string, word string) bool {
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == string(word[0]) {
				if checkWordVert(matrix, word, i, j) || checkWordHoriz(matrix, word, i, j) {
					return true
				}
			}
		}
	}
	return false
}

func checkWordVert(matrix [][]string, word string, i int, j int) bool {
	if len(word) == 0 {
		return true
	}
	if i < 0 || i >= len(matrix) || j < 0 || j >= len(matrix[i]) {
		return false
	}
	if matrix[i][j] == string(word[0]) {
		return checkWordVert(matrix, word[1:], i, j+1)
	}
	return false
}

func checkWordHoriz(matrix [][]string, word string, i int, j int) bool {
	if len(word) == 0 {
		return true
	}
	if i < 0 || i >= len(matrix) || j < 0 || j >= len(matrix[i]) {
		return false
	}
	if matrix[i][j] == string(word[0]) {
		return checkWordHoriz(matrix, word[1:], i+1, j)
	}
	return false
}

func main() {
	matrix := [][]string{
		{"F", "A", "C", "I"},
		{"O", "B", "Q", "P"},
		{"A", "N", "O", "B"},
		{"M", "A", "S", "S"},
	}
	fmt.Println(findWord(matrix, "FOAM"))
	fmt.Println(findWord(matrix, "MASS"))

}
