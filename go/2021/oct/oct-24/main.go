// * Daily Coding Problem October 24 2021

// * [Hard] -- Salesforce

// Connect 4 is a game where opponents take turns dropping red or black discs into
//  a 7 x 6 vertically suspended grid. The game ends either when one player creates
// a line of four consecutive discs of their color (horizontally, vertically, or diagonally),
//  or when there are no more spots left in the grid.

// Design and implement Connect 4.

package main

import "fmt"

const ROWS = 6
const COLS = 7

type ConnectFour struct {
	board [ROWS][COLS]string
}

func displayBoard(c *ConnectFour) {
	fmt.Println("________BOARD________")
	for i := 0; i < ROWS; i++ {
		for j := 0; j < COLS; j++ {
			displayCell := " "
			if c.board[i][j] == "RED" {
				displayCell = "🔴"
			} else if c.board[i][j] == "BLACK" {
				displayCell = "⚫"
			}
			fmt.Printf("%s ", displayCell)
		}
		fmt.Println("\n__ __ __ __ __ __ __")
	}
}

func placePiece(c *ConnectFour, column int, color string) {
	if c.board[0][column] != "EMPTY" {
		fmt.Println("Column is full")
		return
	}

	row := 0
	for row < ROWS && c.board[row][column] == "EMPTY" {
		row++
	}

	c.board[row-1][column] = color
}

// Check if there is a connect four on the board
func checkConnectFour(c *ConnectFour) bool {

	return false
}

func main() {
	c := ConnectFour{}
	for i := 0; i < ROWS; i++ {
		for j := 0; j < COLS; j++ {
			c.board[i][j] = "EMPTY"
		}
	}
	displayBoard(&c)
	placePiece(&c, 0, "RED")
	displayBoard(&c)
	placePiece(&c, 0, "BLACK")
	displayBoard(&c)

	// TODO
	// While game isn't over alternate player turns
	// Allow player1 to chose column 1
	// Check if there is connect four
	// Allow player2 to chose column 2
	// Check if there is connect
	// Keep looping until game is over

	// If game is over display winner
}
