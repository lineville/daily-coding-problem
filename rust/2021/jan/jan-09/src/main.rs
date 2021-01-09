// * Daily Coding Problem January 9 2021

// * [Easy] -- Apple

// * Return the nth number in the fibbonacci sequence

use std::env;

// * Recursive nth fibbonacci number in O(1) space (if we're not counting memory used by the stack)
fn nth_fibbonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => nth_fibbonacci(n - 1) + nth_fibbonacci(n - 2),
    }
}

// * Takes in single command line arg for n
fn main() {
    let args: Vec<String> = env::args().collect();
    let n: u32 = args[1].parse::<u32>().unwrap();
    let result = nth_fibbonacci(n);
    println!("Nth Fibonacci number\nn : {} --> {}", n, result);
}

// * ______________________TESTS_____________________________

#[test]
fn test_nth_fibonacci_1() {
    assert_eq!(nth_fibbonacci(1), 1);
}

#[test]
fn test_nth_fibonacci_2() {
    assert_eq!(nth_fibbonacci(2), 1);
}

#[test]
fn test_nth_fibonacci_8() {
    assert_eq!(nth_fibbonacci(8), 21);
}
