package main

import (
	"reflect"
	"testing"
)

func TestFindTeams1(t *testing.T) {
	students := [][]int{{3}, {2}, {1, 4}, {0, 4, 5}, {2, 3}, {3}}
	team1, team2, err := findTeams(students)
	expected1, expected2 := map[int]bool{0: true, 1: true, 4: true, 5: true}, map[int]bool{2: true, 3: true}

	if !reflect.DeepEqual(team1, expected1) {
		t.Errorf("Team 1 not as expected")
	}

	if !reflect.DeepEqual(team2, expected2) {
		t.Errorf("Team 2 not as expected")
	}

	if err != nil {
		t.Errorf("Received unexpected error: %v", err)
	}
}

func TestFindTeams2(t *testing.T) {
	students := [][]int{{3}, {2}, {1, 3, 4}, {0, 2, 4, 5}, {2, 3}, {3}}

	_, _, err := findTeams(students)

	if err == nil {
		t.Errorf("Failed test")
	}
}
