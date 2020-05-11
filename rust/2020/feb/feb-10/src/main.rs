// * Daily Coding Problem Feb 10 2020

// * [Medium] -- Google

// * Given a set of closed intervals, find the smallest set of numbers 
// * that covers all the intervals. If there are multiple smallest sets,
// * return any of them.

// ! Ex: given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one option is {3, 6}

// * We represent the set of intervals as a vector of tuples for simplicty
// * Time Complexity : O(n)
// * Space Complexity : O(1)
fn smallest_interval(intervals : &Vec<(i32, i32)>) -> (i32, i32) {
    // * Two mutable integers that will track the higest lower bound
    // * as well as the lowest upper bound we encounter
    let mut lowest_upper_bound = std::i32::MAX;
    let mut highest_lower_bound = std::i32::MIN;

    // * Loop over all the closed intervals
    for (lower_bound, upper_bound) in intervals.iter() {
        // * If the lower bound is greater than what we have seen
        // * then update our highest_lower_bound
        if lower_bound > &highest_lower_bound {
            highest_lower_bound = *lower_bound;
        }
        // * If the upper bound is less than what we have seen
        // * then update our lowest_upper_bound
        if upper_bound < &lowest_upper_bound {
            lowest_upper_bound = *upper_bound;
        }
    }
    return (lowest_upper_bound, highest_lower_bound);
}

#[test]
fn test_smallest_interval1() {
    let intervals : Vec<(i32, i32)> = vec![(0, 3), (2, 6), (3, 4), (6, 9)];
    let result : (i32, i32) = smallest_interval(&intervals);
    let expected : (i32, i32) = (3, 6);
    assert_eq!(result, expected);
}

#[test]
fn test_smallest_interval2() {
    let intervals : Vec<(i32, i32)> = vec![(0, 3), (2, 6), (3, 4), (6, 9), (-5, 0)];
    let result : (i32, i32) = smallest_interval(&intervals);
    let expected : (i32, i32) = (0, 6);
    assert_eq!(result, expected);
}

#[test]
fn test_smallest_interval3() {
    let intervals : Vec<(i32, i32)> = vec![(0, 3), (2, 6), (3, 4), (6, 9), (-5, 2)];
    let result : (i32, i32) = smallest_interval(&intervals);
    let expected : (i32, i32) = (2, 6);
    assert_eq!(result, expected);
}

fn main() {
    let intervals : Vec<(i32, i32)> = vec![(0, 3), (2, 6), (3, 4), (6, 9)];
    let result : (i32, i32) = smallest_interval(&intervals);
    println!("{:?}", result);
}
