// * Daily Coding Problem November 9 2020

// * [Medium] -- TwiSigma

// * Given a list of 999,000 unique integers from 1 to 1 Million
// * Find the missing 1,000 numbers
// * What is Space and Time complexity

use std::collections::HashSet;

// * Time: O(N) -- Space: O(N + M) where N is number of missing and M is biggest possible
// * In this case Time = O(N + N) = O(2N) = O(N)
// * N + M = 1,000 + 1,000,000  ~= 1,000,000 so really also O(N)
fn find_missing_nums(nums: &Vec<u64>) -> Vec<u64> {
    let mut missing = Vec::new();
    let mut not_missing = HashSet::<u64>::new();
    let biggest = 100;

    for &num in nums.iter() {
        not_missing.insert(num);
    }

    for num in create_nums_1_to_n(biggest) {
        if !not_missing.contains(&num) {
            missing.push(num);
        }
    }

    return missing;
}

fn create_nums_1_to_n(n: u64) -> Vec<u64> {
    let mut nums = Vec::new();
    for num in 1..n {
        nums.push(num);
    }
    return nums;
}

fn main() {
    let nums = vec![
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
        99, 100,
    ];
    let missing = find_missing_nums(&nums);
    println!("Nums:\n----------------\n{:?}", nums);
    println!("Missing numbers:\n----------------\n{:?}", missing);
}

// * ________________________TESTS___________________________
#[test]
fn test_find_missing_nums() {
    let nums = vec![
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
        99, 100,
    ];
    let expected = vec![29, 53, 81, 98];
    assert_eq!(expected, find_missing_nums(&nums));
}
