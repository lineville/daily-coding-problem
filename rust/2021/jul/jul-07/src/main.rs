// * Daily Coding Problem July 7th 2021

// * [Easy] -- Facebook

// Given a list of integers, return the largest product that can be made by multiplying any three integers.

// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

use std::cmp;

fn max_triplet_product(nums: &[i32]) -> i32 {

    if nums.len() < 3 {
        return -1;
    }

    let mut left_min = vec![-1; nums.len()];
    let mut left_max = vec![-1; nums.len()];
    let mut right_min = vec![-1; nums.len()];
    let mut right_max = vec![-1; nums.len()];

    let mut max_product = i32::MIN;
    let mut max_sum = nums[0];
    let mut min_sum = nums[0];

    for i in 1..nums.len() {
        left_max[i] = max_sum;
        if nums[i] > max_sum {
            max_sum = nums[i];
        }

        left_min[i] = min_sum;
        if nums[i] < min_sum {
            min_sum = nums[i];
        }
    }

    max_sum = nums[nums.len() - 1];
    min_sum = nums[nums.len() - 1];

    for i in (0..nums.len() - 2).rev() {
        right_max[i] = max_sum;
        if nums[i] > max_sum {
            max_sum = nums[i];
        }

        right_min[i] = min_sum;
        if nums[i] < min_sum {
            min_sum = nums[i];
        }
    }
    
    for i in 1..nums.len() - 1 {
        let max1 = cmp::max(nums[i] * left_max[i] * right_max[i],
                            nums[i] * left_min[i] * right_min[i]);
        let max2 = cmp::max(nums[i] * left_max[i] * right_min[i],
                            nums[i] * left_min[i] * right_max[i]);
        
        max_product = cmp::max(max_product, cmp::max(max1, max2));
    }
    
    return max_product;
}


fn main() {
    let nums = vec![-10, -10, 5, 2];
    println!("Max product of three elements from {:?} --> {}", nums, max_triplet_product(&nums));
}
