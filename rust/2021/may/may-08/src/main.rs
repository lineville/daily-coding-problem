// * Daily Coding Problem May 8th 2021

// * [Easy] -- Google

// * Given a sorted list of integers, square the elements and give the output in sorted order.

// ! Ex: [-9, -2, 0, 2, 3] --> [0, 4, 4, 9, 81]

fn sorted_squares(nums: &[i32]) -> Vec<u32> {
    let mut squares : Vec<u32> = nums.iter().map(|n| (n * n) as u32).collect();
    squares.sort();
    return squares;
}

fn main() {
    let nums = vec![-9, -2, 0, 2, 3];
    println!("{:?} --> {:?}", nums, sorted_squares(&nums));
}

#[test]
fn test_sorted_squares_1() {
    let nums = vec![-9, -2, 0, 2, 3];
    assert_eq!(sorted_squares(&nums), vec![0, 4, 4, 9, 81]);
}