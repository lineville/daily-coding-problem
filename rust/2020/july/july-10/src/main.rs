//  * Daily Coding Problem July 10 2020

// * [Easy] -- Microsoft

// * You are given an string representing the initial conditions of
// * some dominoes. Each element can take one of three values:

// * L meaning the domino has just been pushed to the left,
// * R meaning the domino has just been pushed to the right, or
// * . meaning the domino is standing still.

// * Determine the orientation of each tile when the dominoes stop falling.
// * Note that if a domino receives a force from the left and right side
// * simultaneously, it will remain upright.

use std::fmt;

#[derive(Clone, PartialEq)]
enum Domino {
    Left,
    Right,
    Neutral,
}

impl fmt::Debug for Domino {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Domino::Left => write!(f, "\\"),
            Domino::Right => write!(f, "/"),
            Domino::Neutral => write!(f, "|"),
        }
    }
}

fn simulate_dominoes(dominoes: &Vec<Domino>) -> Vec<Domino> {
    let mut result = dominoes.clone();
    for (i, domino) in dominoes.iter().enumerate() {
        match domino {
            Domino::Neutral => {
                result[i] = find_closest_force(i, &dominoes);
            }
            _ => continue,
        }
    }

    result
}

fn find_closest_force(idx: usize, dominoes: &Vec<Domino>) -> Domino {
    let mut left_search = idx;
    let mut right_search = idx;

    while right_search < dominoes.len() {
        match (&dominoes[left_search], &dominoes[right_search]) {
            (Domino::Right, Domino::Neutral) => return Domino::Right,
            (Domino::Neutral, Domino::Left) => return Domino::Left,
            (Domino::Right, Domino::Left) => return Domino::Neutral,
            (Domino::Left, Domino::Right) => return Domino::Neutral,
            (Domino::Neutral, Domino::Right) => return Domino::Neutral,
            (Domino::Left, Domino::Neutral) => return Domino::Neutral,
            _ => {
                left_search = if left_search == 0 { 0 } else { left_search - 1 };
                right_search = if right_search == dominoes.len() - 1 {
                    right_search
                } else {
                    right_search + 1
                };
            }
        };
    }
    panic!("Something went wrong");
}

#[test]
fn test_dominoes_1() {
    let result = simulate_dominoes(&vec![
        Domino::Neutral,
        Domino::Left,
        Domino::Neutral,
        Domino::Right,
        Domino::Neutral,
        Domino::Neutral,
        Domino::Neutral,
        Domino::Neutral,
        Domino::Left,
    ]);

    let expected = vec![
        Domino::Left,
        Domino::Left,
        Domino::Neutral,
        Domino::Right,
        Domino::Right,
        Domino::Right,
        Domino::Left,
        Domino::Left,
        Domino::Left,
    ];
    assert_eq!(result, expected);
}

#[test]
fn test_dominoes_2() {
    let result = simulate_dominoes(&vec![
        Domino::Neutral,
        Domino::Neutral,
        Domino::Right,
        Domino::Neutral,
        Domino::Neutral,
        Domino::Neutral,
        Domino::Left,
        Domino::Neutral,
        Domino::Left,
    ]);

    let expected = vec![
        Domino::Neutral,
        Domino::Neutral,
        Domino::Right,
        Domino::Right,
        Domino::Neutral,
        Domino::Left,
        Domino::Left,
        Domino::Left,
        Domino::Left,
    ];
    assert_eq!(result, expected);
}

fn main() {
    let mut dominoes = vec![Domino::Neutral; 9];
    dominoes[1] = Domino::Left;
    dominoes[3] = Domino::Right;
    dominoes[8] = Domino::Left;

    println!("Domino Simulator!");
    println!("Before: {:?}", dominoes);
    println!("After: {:?}", simulate_dominoes(&dominoes));
}
