// * Daily Coding Problem February 3rd 2020

// * [Medium] -- Google

// * You are given an array of length n + 1 whose elements
// * belong to the set {1, 2, ..., n}. By the pigeonhole principle,
// * there must be a duplicate. Find it in linear time and space.

use std::collections::HashSet;

fn find_duplicate(nums: &[u32]) -> Option<u32> {
    let mut pigeons = HashSet::new();

    for n in nums.iter() {
        if pigeons.contains(n) {
            return Some(*n);
        } else {
            pigeons.insert(n);
        }
    }

    return None;
}

fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
    let result = find_duplicate(&nums);
    println!("Duplicate num in {:?} is {}", nums, result.unwrap());
}

#[test]
fn test_find_duplicate() {
    let nums = vec![1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
    let result = find_duplicate(&nums).unwrap();
    assert_eq!(result, 6);
}
