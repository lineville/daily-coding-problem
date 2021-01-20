// * Daily Coding Problem

// * [Medium] -- Facebook

// * There is an N by M matrix of zeroes. Given N and M, write a function to count the number
// * of ways of starting at the top-left corner and getting to the bottom-right corner.
// * You can only move right or down.

// ! Ex: given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:
// Right, then down
// Down, then right

// * Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

// Recursively search right and down
fn num_paths(m: u32, n: u32) -> u32 {
    if m == 1 || n == 1 {
        1
    } else {
        num_paths(m - 1, n) + num_paths(m, n - 1)
    }
}

fn main() {
    let m = 3;
    let n = 3;
    let result = num_paths(m, n);
    println!("Number of paths in an {} by {} grid is {}", m, n, result);
}

#[test]
fn test_num_paths_1() {
    assert_eq!(num_paths(1, 1), 1);
}

#[test]
fn test_num_paths_2() {
    assert_eq!(num_paths(3, 3), 6);
}

#[test]
fn test_num_paths_3() {
    assert_eq!(num_paths(5, 5), 70);
}
