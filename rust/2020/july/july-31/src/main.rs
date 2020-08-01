// * Daily Coding Problem July 31 2020

// * [Easy] -- Facebook

// * On a mysterious island there are creatures known as Quxes which come in
// * three colors: red, green, and blue. One power of the Qux is that if two
// * of them are standing next to each other, they can transform into a single
// * creature of the third color. Given N Quxes standing in a line, determine
// * the smallest number of them remaining after any possible sequence of
// * such transformations.

// ! Ex:  ['R', 'G', 'B', 'G', 'B'], it is possible to end up with a single Qux through the following steps:

// !          Arrangement       |   Change
// ! ----------------------------------------
// ! ['R', 'G', 'B', 'G', 'B'] | (R, G) -> B
// ! ['B', 'B', 'G', 'B']      | (B, G) -> R
// ! ['B', 'R', 'B']           | (R, B) -> G
// ! ['B', 'G']                | (B, G) -> R
// ! ['R']                     |

use std::fmt;

// * A Qux can be Red, Green, or Blue and can be compared for equality,
// * copied individually by vectors, as well as cloned entirely.
#[derive(PartialEq, Copy, Clone)]
enum Qux {
    Red,
    Green,
    Blue,
}

// * This is how each Qux variant will be printed by rust
impl fmt::Debug for Qux {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Qux::Red => write!(f, "🔴"),
            Qux::Green => write!(f, "🟢"),
            Qux::Blue => write!(f, "🔵"),
        }
    }
}

// * Returns a transformed version of quxes where the first occurence of
// * two different quxes are replaced by the "other_qux" in the output
fn transform(quxes: Vec<Qux>) -> Vec<Qux> {
    let mut result: Vec<Qux> = vec![];
    let mut completed: bool = false;
    for i in 0..quxes.len() - 1 {
        let curr_qux = &quxes[i];
        let next_qux = &quxes[i + 1];
        if next_qux != curr_qux && !completed {
            result.push(other_qux(next_qux, curr_qux));
            completed = true;
        } else {
            result.push(*next_qux);
        }
    }

    if !completed {
        result.push(quxes[quxes.len() - 1]);
    }
    return result;
}

// * Given two of the three Qux variants, return the third one
fn other_qux(first: &Qux, second: &Qux) -> Qux {
    match first {
        Qux::Red => match second {
            Qux::Blue => Qux::Green,
            Qux::Green => Qux::Blue,
            _ => panic!("Impossible!"),
        },
        Qux::Green => match second {
            Qux::Blue => Qux::Red,
            Qux::Red => Qux::Blue,
            _ => panic!("Impossible!"),
        },
        Qux::Blue => match second {
            Qux::Red => Qux::Green,
            Qux::Green => Qux::Red,
            _ => panic!("Impossible!"),
        },
    }
}

fn main() {
    let mut quxes: Vec<Qux> = vec![Qux::Red, Qux::Green, Qux::Blue, Qux::Green, Qux::Blue];
    // let mut quxes: Vec<Qux> = vec![Qux::Blue, Qux::Blue, Qux::Blue, Qux::Blue];
    let mut transformations = -1;
    while quxes.len() > 0 {
        println!("Quxes -> {:?}", quxes);
        quxes = transform(quxes);
        transformations += 1;
    }
    println!(
        "{:?} transformations to arrive at {} remaining qux.",
        transformations,
        quxes.len()
    );
}
