// * Daily Coding Problem July 1st 2020

// * [Medium] -- Pinterest

// * The sequence [0, 1, ..., N] has been jumbled, and the only clue you have
// * for its order is an array representing whether each number is larger or
// * smaller than the last. Given this information, reconstruct an array that is
// * consistent with it.
// ! Ex: given [None, +, +, -, +], you could return [1, 2, 3, 0, 4].

#[derive(Debug)]
enum Clue {
    Plus,
    Minus,
    None,
}

fn reconstruct(clues: &Vec<Clue>) -> Vec<u32> {
    let mut plus_count = 0;
    for clue in clues.iter() {
        match clue {
            Clue::Plus => plus_count += 1,
            _ => continue,
        }
    }

    let first_num = (clues.len() - plus_count - 1) as u32;
    let mut smaller = first_num - 1;
    let mut bigger = first_num + 1;
    let mut numbers = vec![first_num];
    for clue in clues.iter() {
        match clue {
            Clue::Plus => {
                numbers.push(bigger);
                bigger += 1;
            }
            Clue::Minus => {
                numbers.push(smaller);
                // * This lets use unsigned ints and avoid edge case when you go negative
                smaller = if smaller == 0 { 0 } else { smaller - 1 };
            }
            Clue::None => {
                continue;
            }
        }
    }

    numbers
}

#[test]
fn test_reconstruct1() {
    let result = reconstruct(&vec![
        Clue::None,
        Clue::Plus,
        Clue::Plus,
        Clue::Minus,
        Clue::Plus,
    ]);
    assert_eq!(result, vec![1, 2, 3, 0, 4]);
}

#[test]
fn test_reconstruct2() {
    let result = reconstruct(&vec![
        Clue::None,
        Clue::Plus,
        Clue::Plus,
        Clue::Minus,
        Clue::Plus,
        Clue::Minus,
        Clue::Minus,
        Clue::Minus,
        Clue::Plus,
        Clue::Plus,
        Clue::Plus,
    ]);
    assert_eq!(result, vec![4, 5, 6, 3, 7, 2, 1, 0, 8, 9, 10]);
}

fn main() {
    println!("Reconstruct numbers 0...N from clues");
    let clues = vec![Clue::None, Clue::Plus, Clue::Plus, Clue::Minus, Clue::Plus];
    println!("{:?}", clues);
    let reconstruction = reconstruct(&clues);
    println!("{:?}", reconstruction);
}
