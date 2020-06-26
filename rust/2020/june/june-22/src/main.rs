// * Daily Coding Problem June 22 2020

// * [Easy] -- Palantir

// * The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one.
// ! Ex: 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

// * Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.

// * This will return an array of the denominators in Egyptian form since all numerators will be 1

use math::round;

fn egyptian_fraction(num: u32, den: u32, mut denoms: Vec<u32>, idx: usize) -> Vec<u32> {
    if num == 1 {
        denoms.push(den);
    } else {
        let next_denom = round::ceil((den / num).into(), 0) as u32;
        denoms.push(next_denom);
        let gcd = greatest_common_divisor(num * next_denom - den, den * next_denom);
        return egyptian_fraction(round::floor((num * next_denom - den) / gcd, 0), round);
    }
    return denoms;
}

fn main() {
    println!("Egyptian fraction of 4 / 13");
}
