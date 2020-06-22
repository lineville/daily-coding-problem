// * Daily Coding Problem June 22 2020

// * [Easy] -- Palantir

// * The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one.
// ! Ex: 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

// * Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.

// * This will return an array of the denominators in Egyptian form since all numerators will be 1

use math::round;

fn egyptian_fraction(num: u32, den: u32, denoms: Vec<u32>, idx: usize) -> Vec<u32> {
    if num == 1 {
        denoms.push(den);
    } else {
        let nextDenom = round::ceil(den / num);
    }
    return denoms;
}


fn main() {
    println!("Egyptian fraction of 4 / 13");
}

