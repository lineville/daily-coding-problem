// * Daily Coding Problem January 28 2021

// * [Medium] -- Google

// Given an array of numbers and an index i, return the index of the nearest
//  larger number of the number at index i, where distance is measured in array indices.

// For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

// If two distances to larger numbers are the equal, then return any one of them.
// If the array at i doesn't have a nearest larger integer, then return null.

fn index_of_nearest_larger_number(nums: &[i32], index: usize) -> Option<usize> {
    let num_at_idx = nums[index];
    let mut left = if index > 0 { index - 1 } else { 0 };
    let mut right = if index > nums.len() - 1 {
        index + 1
    } else {
        nums.len() - 1
    };

    let mut closestLeft: Option<usize> = None;
    let mut closestRight: Option<usize> = None;

    while left > 0 {
        if nums[left] > num_at_idx {
            closestLeft = Some(left);
        }

        left -= 1;
    }

    while right < nums.len() {
        if nums[right] > num_at_idx {
            closestRight = Some(right);
        }

        right += 1;
    }

    return None;
}

fn main() {
    let i = 0;
    let nums = &[4, 1, 3, 5, 6];
    let result = index_of_nearest_larger_number(nums, i);
    println!(
        "Nearest larger number from {} in {:?} --> {}",
        i,
        nums,
        result.unwrap()
    );
}
