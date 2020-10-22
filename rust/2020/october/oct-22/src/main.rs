// * Daily Coding Problem October 22 2020

// * [Hard] -- Facebook

// * Given a list of integers L, find the maximum length of a sequence
// * of consecutive numbers that can be formed using elements from L.

use std::collections::HashSet;

// * O(N) solution using hashing
fn longest_consecutive_subsequence(sequence: &Vec<i32>) -> i32 {
    let mut set = HashSet::<i32>::new();
    let mut result = 0;

    for &n in sequence.iter() {
        set.insert(n);
    }

    for &n in sequence.iter() {
        // * n is start of a sub-sequence
        if !set.contains(&(&n - 1)) {
            let mut next = n;
            while set.contains(&next) {
                next += 1;
            }

            if next - n > result {
                result = next - n;
            }
        }
    }
    return result;
}

fn main() {
    let sequence = vec![5, 2, 99, 3, 4, 1, 100];
    let result = longest_consecutive_subsequence(&sequence);
    println!(
        "Longest consecutive sub-sequence of {:?} --> {}",
        sequence, result
    );
}

// * ________________________TESTS______________________________

#[test]
fn test_longest_consecutive_subsequence_1() {
    assert_eq!(
        longest_consecutive_subsequence(&vec![5, 2, 99, 3, 4, 1, 100]),
        5
    );
}

#[test]
fn test_longest_consecutive_subsequence_2() {
    assert_eq!(
        longest_consecutive_subsequence(&vec![1, 9, 3, 10, 4, 20, 2]),
        4
    );
}
