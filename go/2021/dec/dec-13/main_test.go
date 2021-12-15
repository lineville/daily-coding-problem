package main

import "testing"

func TestFindWord(t *testing.T) {
	matrix := [][]string{
		{"F", "A", "C", "I"},
		{"O", "B", "Q", "P"},
		{"A", "N", "O", "B"},
		{"M", "A", "S", "S"},
	}

	if findWord(matrix, "FOAM") != true {
		t.Error("Expected true, got false")
	}

	if findWord(matrix, "MASS") != true {
		t.Error("Expected true, got false")
	}
}

func TestFindWord_2(t *testing.T) {
	matrix := [][]string{
		{"F", "A", "C", "I"},
		{"O", "B", "Q", "P"},
		{"A", "N", "O", "B"},
		{"M", "A", "S", "S"},
	}

	if findWord(matrix, "FOAP") != false {
		t.Error("Expected false, got true")
	}

	if findWord(matrix, "MASX") != false {
		t.Error("Expected false, got true")
	}
}
