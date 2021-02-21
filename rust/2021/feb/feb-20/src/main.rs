// * Daily Coding Problem February 20 2021

// * [Easy] -- TripleByte

// * You are given n numbers as well as n probabilities that sum up to 1.
// * Write a function to generate one of the numbers with its corresponding probability.

// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2],
// your function should return 1 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.

// You can generate random numbers between 0 and 1 uniformly.

use rand::prelude::*;
use std::collections::HashMap;

// * Returns one of the numbers from nums with the corresponding probability
// * at the same index in the list of probabilities
// * O(N) where N is the length of nums and probabilities
fn random_weighted_select_num(nums: &[i32], probabilities: &[f32]) -> i32 {
    let rand_num = random_num_zero_to_one();

    let mut probabilities_sum: f32 = 0.0;
    let mut idx = 0;

    while probabilities_sum < rand_num {
        probabilities_sum += probabilities[idx];
        idx += 1;
    }
    return nums[idx - 1];
}

// * Returns a random float from 0 to 1
fn random_num_zero_to_one() -> f32 {
    let mut rng = rand::thread_rng();
    let rand_num: f32 = rng.gen();
    return rand_num;
}

// * Executes n number of trials and produces a hashmap containing the results
fn execute_n_trials(n: u32, nums: &[i32], probabilities: &[f32]) -> HashMap<i32, i32> {
    let mut occurrences: HashMap<i32, i32> = HashMap::new();
    for _i in 1..n {
        let n = random_weighted_select_num(nums, probabilities);
        if occurrences.get(&n).is_some() {
            occurrences.insert(n, *occurrences.get(&n).unwrap() + 1);
        } else {
            occurrences.insert(n, 1);
        }
    }
    return occurrences;
}

fn main() {
    let occurrences = execute_n_trials(1000, &[1, 2, 3, 4], &[0.1, 0.5, 0.2, 0.2]);
    for (n, count) in occurrences.iter() {
        println!("{} --> {}", n, count);
    }
}

// * _________________TESTS_________________

#[test]
fn test_random_weighted_select_num_1() {
    let num_trials = 100;
    let nums = &[1, 2, 3, 4];
    let probabilities = &[0.1, 0.5, 0.2, 0.2];
    let threshold = 10.0;
    let occurrences = execute_n_trials(num_trials, nums, probabilities);
    for (idx, n) in nums.iter().enumerate() {
        let target = num_trials as f32 * probabilities[idx];
        let actual = *occurrences.get(&n).unwrap() as f32;
        println!("Target: {}, Actual: {}", target, actual);
        assert_eq!(
            actual >= (target - threshold) && actual <= (target + threshold),
            true
        );
    }
}

#[test]
fn test_random_weighted_select_num_2() {
    let num_trials = 1000;
    let nums = &[1, 2, 3, 4, 5, 6];
    let probabilities = &[0.1, 0.3, 0.2, 0.2, 0.05, 0.15];
    let threshold = 50.0;
    let occurrences = execute_n_trials(num_trials, nums, probabilities);
    for (idx, n) in nums.iter().enumerate() {
        let target = num_trials as f32 * probabilities[idx];
        let actual = *occurrences.get(&n).unwrap() as f32;
        println!("Target: {}, Actual: {}", target, actual);
        assert_eq!(
            actual >= (target - threshold) && actual <= (target + threshold),
            true
        );
    }
}
