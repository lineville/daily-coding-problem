// * Daily Coding Problem March 23rd 2021

// * [Medium] -- Amazon

// Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

// ! Ex: given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137,
// ! since we would take elements 42, 14, -5, and 86.

// ! Ex: array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

// * Constraint: Time complexity = O(N)

use std::cmp;

fn largest_contiguous_subarray(nums: &[i32]) -> i32 {
    let mut max_so_far = nums[0];
    let mut current_max = nums[0];

    for i in 1..nums.len() {
        let n = nums[i];
        current_max = cmp::max(n, current_max + n);
        max_so_far = cmp::max(current_max, max_so_far);
    }
    // Handles the edge case with all negatives
    max_so_far = cmp::max(max_so_far, 0);
    return max_so_far;
}

fn main() {
    let nums = &[-5, -1, -8, -9];
    println!(
        "Largest Contiguous Subarray Sum of {:?} --> {}",
        nums,
        largest_contiguous_subarray(nums)
    );
}

// ___________________TESTS____________________

#[test]
fn test_largest_contiguous_subarray_1() {
    let nums = &[34, -50, 42, 14, -5, 86];
    assert_eq!(largest_contiguous_subarray(nums), 137);
}

#[test]
fn test_largest_contiguous_subarray_2() {
    let nums = &[-5, -1, -8, -9];
    assert_eq!(largest_contiguous_subarray(nums), 0);
}
