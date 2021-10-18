package main

import (
	"errors"
	"fmt"
)

// Splits the students into two teams such that no team has students who are enemies, or returns error if not possible
// Output: (team1, team2, error)
func findTeams(students [][]int) (map[int]bool, map[int]bool, error) {
	team1 := make(map[int]bool)
	team2 := make(map[int]bool)

	team1Enemies := make(map[int]bool)
	team2Enemies := make(map[int]bool)

	for s, enemies := range students {
		if !team1[s] && !team1Enemies[s] {
			team1[s] = true
			for _, enemy := range enemies {
				team1Enemies[enemy] = true
			}
		} else if !team2[s] && !team2Enemies[s] {
			team2[s] = true
			for _, enemy := range enemies {
				team2Enemies[enemy] = true
			}
		} else {
			return nil, nil, errors.New("no team formation was possible")
		}
	}
	return team1, team2, nil
}

func getKeys(m map[int]bool) []int {
	keys := make([]int, 0)
	for k := range m {
		keys = append(keys, k)
	}
	return keys
}

func displayTeams(students [][]int) {
	team1, team2, err := findTeams(students)
	fmt.Println("Students: ", students)
	fmt.Println("Team 1: ", getKeys(team1))
	fmt.Println("Team 2: ", getKeys(team2))

	if err != nil {
		fmt.Println("No team was possible")
	}
}

func main() {
	students1 := [][]int{{3}, {2}, {1, 4}, {0, 4, 5}, {2, 3}, {3}}
	displayTeams(students1)
	students2 := [][]int{{3}, {2}, {1, 3, 4}, {0, 2, 4, 5}, {2, 3}, {3}}
	displayTeams(students2)

}
