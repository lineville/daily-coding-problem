// * Daily Coding Problem July 29 2020

// * [Medium] -- SalesForce

// * The number 6174 is known as Kaprekar's contant, after the
// * mathematician who discovered an associated property: for all
// * four-digit numbers with at least two distinct digits, repeatedly
// * applying a simple procedure eventually results in this value.
// * The procedure is as follows:

// * For a given input x, create two new numbers that consist of the digits
// * in x in ascending and descending order.

// * Subtract the smaller number from the larger number

// ! Ex: 1234

// ! 4321 - 1234 = 3087
// ! 8730 - 0378 = 8352
// ! 8532 - 2358 = 6174

// ! Once at 6174 it terminates

// * Write a function that returns how many steps it took to terminate for n.

const KAPREKAR_CONSTANT: u32 = 6174;

// * Returns the number of steps it takes for n to reach Kaprekar's constant.
fn steps_to_6174(n: u32) -> u32 {
    if n == KAPREKAR_CONSTANT {
        return 0;
    } else {
        let asc = digits_to_num(&num_to_digits(n, true));
        let desc = digits_to_num(&num_to_digits(n, false));
        println!("{}", desc - asc);
        return steps_to_6174(desc - asc) + 1;
    }
}

// * Converts a number into a vector of its digits
// * If asc is true, will return the digits sorted in ascending order
// * If desc is false, will return the digits sorted in descending order
fn num_to_digits(n: u32, asc: bool) -> Vec<u32> {
    let mut digits: Vec<u32> = n
        .to_string()
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .collect();
    digits.sort();
    if !asc {
        digits.reverse();
    }
    return digits;
}

// * Converts a vector of digits into its number representation
fn digits_to_num(digits: &[u32]) -> u32 {
    if digits.len() == 0 {
        return 0;
    } else {
        return (digits[0] * 10u32.pow(digits.len() as u32 - 1)) + digits_to_num(&digits[1..]);
    }
}

#[test]
fn test_num_to_digits_1() {
    assert_eq!(num_to_digits(1234, true), vec![1, 2, 3, 4]);
}

#[test]
fn test_num_to_digits_2() {
    assert_eq!(num_to_digits(1234, false), vec![4, 3, 2, 1]);
}

#[test]
fn test_digits_to_num() {
    assert_eq!(digits_to_num(&[1, 2, 3, 4]), 1234);
}

#[test]
fn steps_to_6174_1() {
    assert_eq!(steps_to_6174(1234), 3);
}

#[test]
fn steps_to_6174_2() {
    assert_eq!(steps_to_6174(6174), 0);
}

fn main() {
    let mut input = 1234;
    println!("{} --> {} steps until 6174", input, steps_to_6174(input));
    input = 2132;
    println!("{} --> {} steps until 6174", input, steps_to_6174(input));
}
