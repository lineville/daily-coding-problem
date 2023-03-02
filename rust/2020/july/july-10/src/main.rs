//  * Daily Coding Problem July 10 2020

// * [Easy] -- Microsoft

// * You are given an string representing the initial conditions of some dominoes.
// * Each element can take one of three values:

// * L meaning the domino has just been pushed to the left,
// * R meaning the domino has just been pushed to the right, or
// * . meaning the domino is standing still.

// * Determine the orientation of each tile when the dominoes stop falling.
// * Note that if a domino receives a force from the left and right side
// * simultaneously, it will remain upright.

use clap::Parser;
use itertools::Itertools;
use std::{convert::TryInto, fmt, thread::sleep};
use figlet_rs::FIGfont;

// CLI Arguments
#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Args {}

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

fn simulate_dominoes(dominoes: &Vec<Domino>, tick: f32) {
    let mut dom_copy = dominoes.clone();
    let final_state_neutral_count = compute_final_state(&dom_copy)
        .iter()
        .filter(|d| *d.to_owned() == Domino::Neutral)
        .count();

    loop {
        print!("\x1B[2J\x1B[1;1H"); // Clear the console 🤮
        println!("{:?}", &dom_copy.iter().format(""));

        dom_copy = animate_dominoes(&dom_copy, tick);

        let neutral_count = dom_copy
            .iter()
            .filter(|d| *d.to_owned() == Domino::Neutral)
            .count();

        if neutral_count == final_state_neutral_count {
            print!("\x1B[2J\x1B[1;1H"); // Clear the console 🤮
            println!("{:?}", &dom_copy.iter().format(""));
            break;
        }
    }
}

fn animate_dominoes(dominoes: &Vec<Domino>, tick: f32) -> Vec<Domino> {
    let mut result = dominoes.clone();

    for (idx, domino) in dominoes.iter().enumerate() {
        // Get dominoes to left and right (replace w neutral for edges)
        let left = if idx == 0 {
            Domino::Neutral
        } else {
            dominoes[idx - 1].to_owned()
        };
        let right = if idx == dominoes.len() - 1 {
            Domino::Neutral
        } else {
            dominoes[idx + 1].to_owned()
        };

        match (left, domino, right) {
            // Domino in middle gets knocked left
            (Domino::Left, Domino::Neutral, Domino::Left) => {
                // [\, |, \] => [\, \, \]
                result[idx] = Domino::Left;
            }
            (Domino::Neutral, Domino::Neutral, Domino::Left) => {
                // [ |, |, \] => [ |, \, \]
                result[idx] = Domino::Left;
            }

            // Domino in middle gets knocked right
            (Domino::Right, Domino::Neutral, Domino::Right) => {
                // [/ , |, /] => [/ , /, /]
                result[idx] = Domino::Right;
            }
            (Domino::Right, Domino::Neutral, Domino::Neutral) => {
                // [/ , |, | ] => [/ , /, | ]
                result[idx] = Domino::Right;
            }
            _ => {} // Leave domino as is for anything else
        }
    }

    sleep(std::time::Duration::from_secs_f32(tick));
    result
}

fn compute_final_state(dominoes: &Vec<Domino>) -> Vec<Domino> {
    let mut result = dominoes.clone();
    for (i, domino) in dominoes.iter().enumerate() {
        match domino {
            Domino::Neutral => match find_closest_force(i.try_into().unwrap(), &dominoes) {
                Domino::Neutral => continue,
                d => {
                    result[i] = d;
                }
            },
            _ => continue,
        }
    }

    result
}

fn find_closest_force(idx: usize, dominoes: &Vec<Domino>) -> Domino {
    let mut left = idx.checked_sub(1).unwrap_or(0);
    let mut right = if idx + 1 < dominoes.len() {
        idx + 1
    } else {
        idx
    };

    while left > 0 || right < dominoes.len() {
        match (&dominoes[left], &dominoes[right]) {
            (Domino::Right, Domino::Right) => return Domino::Right,
            (Domino::Right, Domino::Neutral) => return Domino::Right,
            (Domino::Left, Domino::Left) => return Domino::Left,
            (Domino::Neutral, Domino::Left) => return Domino::Left,
            (Domino::Right, Domino::Left) => return Domino::Neutral,
            (Domino::Left, Domino::Right) => return Domino::Neutral,
            (Domino::Left, Domino::Neutral) => return Domino::Neutral,
            (Domino::Neutral, Domino::Right) => return Domino::Neutral,
            (Domino::Neutral, Domino::Neutral) => {
                left = left.checked_sub(1).unwrap_or(0);
                right = if right + 1 < dominoes.len() {
                    right + 1
                } else {
                    right
                };
            }
        };
    }

    Domino::Neutral
}

fn greeting() {
    println!("Welcome to the domino  simulator 🎉 🎴 🎉 !");
    println!("--------------------------------------------");
}

// ---------------------------------------------------------------------------

fn main() {
    let mut dominoes = vec![Domino::Neutral; 101];
    dominoes[0] = Domino::Right;
    dominoes[100] = Domino::Left;

    // TODO Create a CLI to allow users to specify the initial state of the dominoes using space bar to select, arrow keys to change the state of the selected domino, and enter to start the simulation
    // TODO Create a CLI to allow users to specify the tick rate of the simulation
    // TODO Create a CLI to allow users to specify the number of dominoes in the simulation
    // TODO set theme from list with different emojis as the dominoes 🗡️ 🎴 🍡 👈 👉

    let standard_font = FIGfont::standard().unwrap();
    let figure = standard_font.convert("Domino Simulator");
    assert!(figure.is_some());
    println!("{}\n\n", figure.unwrap());

    // println!("{:?}", &dominoes.iter().format(""));
    // simulate_dominoes(&dominoes, 0.15);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

#[test]
fn test_find_closest_force_1() {
    let result = find_closest_force(
        5,
        &vec![
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Neutral,
            Domino::Left,
        ],
    );

    assert_eq!(result, Domino::Left);
}

#[test]
fn test_find_closest_force_2() {
    let result = find_closest_force(0, &vec![Domino::Neutral, Domino::Neutral, Domino::Right]);

    assert_eq!(result, Domino::Neutral);
}

#[test]
fn test_find_closest_force_3() {
    let result = find_closest_force(0, &vec![Domino::Neutral, Domino::Left]);

    assert_eq!(result, Domino::Left);
}

#[test]
fn test_compute_final_state_1() {
    let result = compute_final_state(&vec![
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
fn test_compute_final_state_2() {
    let result = compute_final_state(&vec![
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

#[test]
fn test_compute_final_state_3() {
    let mut dominoes = vec![Domino::Neutral; 100];
    dominoes[50] = Domino::Left;
    dominoes[51] = Domino::Right;

    let result = compute_final_state(&dominoes);

    let mut expected = vec![Domino::Neutral; 100];
    for i in 0..51 {
        expected[i] = Domino::Left;
    }
    for i in 51..100 {
        expected[i] = Domino::Right;
    }
    assert_eq!(result, expected);
}
