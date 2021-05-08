// Daily Coding Problem May 2nd 2021
//
// [Hard] -- Uber
//
// Given an array of integers, return a new array such that each element at index i of the new
// array is the product of all the numbers in the original array except the one at i.

// FOLLOW UP
// * Don't user division! (If we could this would be trivial...)

// fn trivial_solution(nums: &[i32]) -> Vec<i32> {
//     let product : i32 = nums.iter().product();
//     nums.iter().map(|n| product / n).collect()
// }

fn products_excluding_me(nums: &[i32]) -> Vec<i32> {
    let mut result = vec![1; nums.len()];
    let mut temp = 1;

    for i in 0..nums.len() {
        result[i] = temp;
        temp *= nums[i];
    }

    temp = 1;

    for i in (0..nums.len()).rev() {
        result[i] *= temp;
        temp *= nums[i];
    }

    return result;
}

fn main() {
    let nums = vec![1, 2, 3, 4, 5];
    println!("nums: {:?}", nums);
    println!("products excluding i: {:?}", products_excluding_me(&nums));
}

#[test]
fn test_product_excluding_me_1() {
    let nums = vec![1, 2, 3, 4, 5];
    assert_eq!(products_excluding_me(&nums), vec![120, 60, 40, 30, 24]);
}

#[test]
fn test_product_excluding_me_2() {
    let nums = vec![3, 2, 1];
    assert_eq!(products_excluding_me(&nums), vec![2, 3, 6]);
}


#[test]
fn test_product_excluding_me_3() {
    let nums = vec![5, 7, 11, 15, 2, 9, 12];
    assert_eq!(products_excluding_me(&nums), vec![249480, 178200, 113400, 83160, 623700, 138600, 103950]);
}
