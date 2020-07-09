// * Daily Coding Problem July 8th 2020

// * [Hard] -- Oracle

// * You are presented with an 8 by 8 matrix representing the positions of pieces on a chess board.
// * The only pieces on the board are the black king and various white pieces.
// * Given this matrix, determine whether the king is in check.

// * ...K....
// * ........
// * .B......
// * ......P.
// * .......R
// * ..N.....
// * ........
// * .....Q..

use std::fmt;

const BOARD_SIZE: usize = 8;

#[derive(Clone)]
enum Piece {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
    Empty,
}

impl fmt::Debug for Piece {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Piece::Pawn => write!(f, "P"),
            Piece::Rook => write!(f, "R"),
            Piece::Knight => write!(f, "N"),
            Piece::Bishop => write!(f, "B"),
            Piece::Queen => write!(f, "Q"),
            Piece::King => write!(f, "K"),
            Piece::Empty => write!(f, "."),
        }
    }
}

fn check_mate(board: Vec<Vec<Piece>>) -> bool {
    let king_location = find_king(&board);

    for (i, row) in board.iter().enumerate() {
        for (j, piece) in row.iter().enumerate() {
            if can_attack_king(piece, i, j, king_location) {
                return true;
            }
        }
    }
    false
}

fn can_attack_king(piece: &Piece, i: usize, j: usize, king_location: (usize, usize)) -> bool {
    match piece {
        Piece::Pawn => check_pawn(i, j, king_location),
        Piece::Rook => check_rook(i, j, king_location),
        Piece::Knight => check_knight(i, j, king_location),
        Piece::Bishop => check_bishop(i, j, king_location),
        Piece::Queen => check_queen(i, j, king_location),
        _ => false,
    }
}

// * Pawn can only move one space in any direction
fn check_pawn(row: usize, col: usize, king_location: (usize, usize)) -> bool {
    let row_diff = row as isize - king_location.0 as isize;
    let col_diff = col as isize - king_location.1 as isize;
    isize::abs(row_diff) < 2 && isize::abs(col_diff) < 2
}

// * Rook can move any number of spaces but not diagonally (only up, down, left, right)
fn check_rook(row: usize, col: usize, king_location: (usize, usize)) -> bool {
    // TODO Should also check that there are no other pieces in the way ...
    row == king_location.0 || col == king_location.1
}

// * Knight can move 2 horizontal + 1 vertical OR 1 horizontal + 2 vertical
fn check_knight(row: usize, col: usize, king_location: (usize, usize)) -> bool {
    let row_diff = row as isize - king_location.0 as isize;
    let col_diff = col as isize - king_location.1 as isize;
    (row_diff == 2 && col_diff == 1) || (row_diff == 1 && col_diff == 2)
}

// * Bishop can move any number of spaces diagonally only
fn check_bishop(row: usize, col: usize, king_location: (usize, usize)) -> bool {
    // TODO Should also check that there are no pieces in the way ...
    let row_diff = row as isize - king_location.0 as isize;
    let col_diff = col as isize - king_location.1 as isize;
    isize::abs(row_diff) == isize::abs(col_diff)
}

// * Queen can move any number of spaces diagonally, horizontally or vertically
fn check_queen(row: usize, col: usize, king_location: (usize, usize)) -> bool {
    check_bishop(row, col, king_location) || check_rook(row, col, king_location)
}

fn find_king(board: &Vec<Vec<Piece>>) -> (usize, usize) {
    for (i, row) in board.iter().enumerate() {
        for (j, piece) in row.iter().enumerate() {
            match piece {
                Piece::King => return (i, j),
                _ => continue,
            }
        }
    }
    panic!("No king found!");
}

fn main() {
    let empty_row = vec![Piece::Empty; BOARD_SIZE];
    let mut board = vec![empty_row; BOARD_SIZE];
    board[0][3] = Piece::King;
    board[2][1] = Piece::Bishop;
    board[3][6] = Piece::Pawn;
    board[4][7] = Piece::Rook;
    board[5][2] = Piece::Knight;
    board[7][5] = Piece::Queen;

    println!("Chess Board\n------------");
    for row in board.iter() {
        println!("{:?}", row);
    }

    println!(
        "Checkmate -> {}",
        if check_mate(board) { "✔️" } else { "❌" }
    );
}

// * TESTS ----------------------------------------------

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_check_mate_bishop() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[2][1] = Piece::Bishop;
        board[3][6] = Piece::Pawn;
        board[4][7] = Piece::Rook;
        board[5][2] = Piece::Knight;
        board[7][5] = Piece::Queen;
        assert_eq!(check_mate(board), true);
    }

    #[test]
    fn test_check_mate_pawn() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[0][4] = Piece::Pawn;
        assert_eq!(check_mate(board), true);
    }

    #[test]
    fn test_check_mate_rook() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[4][3] = Piece::Rook;
        assert_eq!(check_mate(board), true);
    }

    #[test]
    fn test_check_mate_knight() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[1][5] = Piece::Knight;
        assert_eq!(check_mate(board), true);
    }

    #[test]
    fn test_check_mate_queen() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[3][3] = Piece::Queen;
        assert_eq!(check_mate(board), true);
    }

    #[test]
    fn test_check_mate_queen2() {
        let empty_row = vec![Piece::Empty; BOARD_SIZE];
        let mut board = vec![empty_row; BOARD_SIZE];
        board[0][3] = Piece::King;
        board[3][6] = Piece::Queen;
        assert_eq!(check_mate(board), true);
    }
}
