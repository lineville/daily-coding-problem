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

// * All the possible values that a space on the board can take
#[derive(Clone)] // * This lets use populate vectors with Pieces
enum Piece {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  Empty,
}

// * Custom print implementation allows us to use descriptive names in code
// * but have the shortened simplified versions printed out on the board.
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

// * Checks if the king on the board can be attacked by any of the opponent's pieces
fn check_mate(board: Vec<Vec<Piece>>) -> bool {
  // TODO Implement Me!!
  false
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
