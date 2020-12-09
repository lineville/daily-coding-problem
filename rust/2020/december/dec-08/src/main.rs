// * Daily Coding Problem December 8th 2020

// * [Easy] -- PagerDuty

// * Given a positive integer N, find the smallest number of steps it will take to reach 1.

// * There are two kinds of permitted steps:

// * You may decrement N to N - 1.
// * If a * b = N, you may decrement N to the larger of a and b.

use std::cmp;

fn smallest_number_of_steps(n: u32) -> u32 {
    if n == 1 {
        return 0;
    } else {
        let next = next_best_number(n);
        println!("{}", next);
        return smallest_number_of_steps(next) + 1;
    }
}

fn next_best_number(n: u32) -> u32 {
    let mut divisors: Vec<(u32, u32)> = Vec::new();
    for i in (2u32..).take_while(|x| x * x <= n) {
        if n % i == 0 {
            divisors.push((i, n / i));
        }
    }

    if divisors.is_empty() {
        return n - 1;
    }

    let mut smallest_larger_number = cmp::max(divisors[0].0, divisors[0].1);
    for i in 1..divisors.len() {
        smallest_larger_number = cmp::min(
            smallest_larger_number,
            cmp::max(divisors[i].0, divisors[i].1),
        );
    }

    return smallest_larger_number;
}

fn main() {
    let n = 100;
    let steps = smallest_number_of_steps(n);
    println!("n = {}, steps = {}", n, steps);
}

// * ________________TESTS_______________________

#[test]
fn test_smallest_number_of_steps() {
    assert_eq!(smallest_number_of_steps(100), 5);
}

#[test]
fn test_smallest_number_of_steps_2() {
    assert_eq!(smallest_number_of_steps(56), 4);
}
