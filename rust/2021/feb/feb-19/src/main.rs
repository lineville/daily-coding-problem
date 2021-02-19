// * Daily Coding Problem February 18 2021

// * [Easy] -- Palantir

// * Write a program that checks whether an integer is a palindrome.
// * For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
// * Do not convert the integer into a string.

use std::iter::from_fn;

// * Converts a number into a vector of digits without converting to string
fn num_digits(num: i32) -> Vec<i32> {
    /*
     * Zero is a special case because
     * it is the terminating value of the unfold below,
     * but given a 0 as input, [0] is expected as output.
     * w/out this check, the output is an empty vec.
     */
    if num == 0 {
        return vec![0];
    }

    let mut x = num;
    let mut result = from_fn(move || {
        if x == 0 {
            None
        } else {
            let current = x % 10;
            x /= 10;
            Some(current)
        }
    })
    .collect::<Vec<i32>>();

    result.reverse();
    result
}

fn is_palindrome(num: i32) -> bool {
    let digits = num_digits(num);

    if digits.len() < 2 {
        return true;
    }
    let mut left = 0;
    let mut right = digits.len() - 1;

    while left < right {
        if digits[left] != digits[right] {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
}

fn main() {
    println!("1234321 is palindrome {}", is_palindrome(1234321));
}

// * _______________TESTS________________

#[test]
fn test_is_palindrome_1() {
    let result = is_palindrome(1234321);
    assert_eq!(result, true);
}

#[test]
fn test_is_palindrome_2() {
    let result = is_palindrome(12345321);
    assert_eq!(result, false);
}

#[test]
fn test_is_palindrome_3() {
    let result = is_palindrome(0);
    assert_eq!(result, true);
}

#[test]
fn test_is_palindrome_4() {
    let result = is_palindrome(11);
    assert_eq!(result, true);
}
