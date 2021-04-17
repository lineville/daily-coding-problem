// * Daily Coding Problem April 16 2021

// * [Medium] -- Google

// * Given an array of integers, return a new array where each element 
// * in the new array is the number of smaller elements to the right of that element in the original input array.

// ! For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], 

// * Time: O(N^2)
fn numbers_smaller_to_right(nums: &[i32]) -> Vec<u32> {
    let mut result : Vec<u32> = vec![];

    for (i, &n) in nums.iter().enumerate() {
        let mut nums_smaller_to_the_right = 0;
        
        for j in i..nums.len() {
            if nums[j] < n {
                nums_smaller_to_the_right += 1;
            }
        }
        result.push(nums_smaller_to_the_right);
    }

    return result;
}

fn main() {
    let nums = vec![3, 4, 9, 6, 1];
    println!("{:?} --> {:?}", nums, numbers_smaller_to_right(&nums));
}

#[test]
fn test_numbers_smaller_to_the_right_1() {
    let nums = vec![3, 4, 9, 6, 1];
    let expected = vec![1, 1, 2, 1, 0];
    assert_eq!(numbers_smaller_to_right(&nums), expected);
}

#[test]
fn test_numbers_smaller_to_the_right_2() {
    let nums = vec![3, 4, 9, 6, 1, -8];
    let expected = vec![2, 2, 3, 2, 1, 0];
    assert_eq!(numbers_smaller_to_right(&nums), expected);
}