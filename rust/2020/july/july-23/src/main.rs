// * Daily Coding Problem July 23 2020

// * [Easy] -- Netflix

// * Given an array of integers, determine whether it contains a Pythagorean
// * triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the
// * equation a^2+ b^2= c^2

fn pythagorean_triple(a: u32, b: u32, c: u32) -> bool {
    a.pow(2) + b.pow(2) == c.pow(2)
}

#[test]
fn test_pythagorean_triple_1() {
    assert_eq!(pythagorean_triple(3, 4, 5), true);
}

#[test]
fn test_pythagorean_triple_2() {
    assert_eq!(pythagorean_triple(6, 8, 10), true);
}

#[test]
fn test_pythagorean_triple_3() {
    assert_eq!(pythagorean_triple(6, 8, 11), false);
}

fn main() {
    println!(
        "Pythagorean triple ? {}, {}, {} --> {}",
        3,
        4,
        5,
        pythagorean_triple(3, 4, 5)
    );
    println!(
        "Pythagorean triple ? {}, {}, {} --> {}",
        3,
        4,
        10,
        pythagorean_triple(3, 4, 10)
    );
}
