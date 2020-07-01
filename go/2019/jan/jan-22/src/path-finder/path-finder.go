package main

import "fmt"
import "math"

func main() {
	points1 := []coordinate {coordinate{x: 0, y: 0}, coordinate{ x: 1, y: 1}, coordinate{ x: 1, y: 2} }
	dist := minimumSteps(points1)
	fmt.Println(dist)
}

type coordinate struct {
	x int
	y int
}

func minimumSteps(coordinates []coordinate) int {
	return minimumStepsRecursive(coordinates, 0)
}

func minimumStepsRecursive(coordinates []coordinate, stepsSoFar int) int {
	if (len(coordinates) < 2) {
		return stepsSoFar
	}
	src := coordinates[0]
	dest := coordinates[1]
	distance := computeDistance(src, dest)
	return minimumStepsRecursive(coordinates[1:], distance + stepsSoFar)
}

func computeDistance(src coordinate, dest coordinate) int {
	horiz := math.Abs(float64(src.x) - float64(dest.x))
	vert := math.Abs(float64(src.y) - float64(dest.y))
	manHattanDistance := int(horiz + vert)
	distanceSavedByDiagonals := int(math.Min(horiz, vert))
	return (manHattanDistance - distanceSavedByDiagonals)
}