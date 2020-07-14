// * Daily Coding Problem

// * [Easy] -- Apple

// * A fixed point in an array is an element whose value is equal to
// * its index. Given a sorted array of distinct elements, return a
// * fixed point, if one exists. Otherwise, return False.

fn find_fixed_point(nums: &[i32]) -> Result<i32, bool> {
    for (i, &num) in nums.iter().enumerate() {
        // * Found a fixed point
        if i as i32 == num {
            return Ok(num);
        }

        // * Finding a fix point is not possible, stop early
        if (i as i32) < num {
            return Err(false);
        }
    }
    Err(false)
}

#[test]
fn test_find_fixed_point_1() {
    assert_eq!(find_fixed_point(&[-6, 0, 2, 40]), Ok(2));
}

#[test]
fn test_find_fixed_point_2() {
    assert_eq!(find_fixed_point(&[1, 5, 7, 8]), Err(false));
}

fn main() {
    let nums = &[-6, 0, 2, 40];
    println!("Fixed point in {:?} --> {:?}", nums, find_fixed_point(nums));
}
