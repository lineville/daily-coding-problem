// * Daily Coding Problem Feb 9th 2020 2016

// * Given a sorted list of integers, square the elements and give the output in sorted order.

// ! Ex: [-9, -2, 0, 2, 3] => [0, 4, 4, 9, 81]

// * Converts a sorted list of integers into a sorted list of the squares of those integers.
// * Time Complexity : O(n) by processing from both sides of the
fn sort_squares(nums : &Vec<i32>) -> Vec<i32> {
    let mut squares = Vec::<i32>::new();
    let mut front = 0;
    let mut back = nums.len() - 1;

    // * Using insert ruins efficiency since that shifts all elements O(n)
    // * There must be a better mechanism in rust to push to front
    while front <= back {
        if nums[front].abs() >= nums[back].abs() {
            squares.insert(0, nums[front] * nums[front]);
            front += 1;
        } else {
            squares.insert(0, nums[back] * nums[back]);
            back -= 1;
        }
    }
    squares
}


#[test]
fn test_sort_squares() {
    let nums : Vec<i32> = vec![-9, -2, 0, 2, 3];
    let result: Vec<i32> = sort_squares(&nums);
    let expected: Vec<i32> = vec![0, 4, 4, 9, 81];
    assert_eq!(result, expected);
}


fn main() {
    let nums : Vec<i32> = vec![-9, -2, 0, 2, 3];
    let result: Vec<i32> = sort_squares(&nums);
    println!("{:?}", result);
}
