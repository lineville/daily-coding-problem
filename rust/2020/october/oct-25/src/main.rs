// * Daily Coding Problem October 25 2020

// * [Hard] -- Amazon

// * Given a sorted array arr of distinct integers, return the lowest index
// * i for which arr[i] == i. Return null if there is no such index.

// * Unclear why this is labeled as hard -- maybe there's something more tricky
// * that I'm not thinking about, but this works in O(N)
fn lowest_value_index_match(arr: &[i32]) -> Option<usize> {
    for (idx, &val) in arr.iter().enumerate() {
        if idx as i32 == val {
            return Some(idx);
        }
    }
    return None;
}

fn main() {
    println!("Lowest index where value is equal to index");
    let arr = vec![-5, -3, 2, 3];
    let result = lowest_value_index_match(&arr);
    println!("{:?}", result);
}

// * _______________________TESTS___________________________

#[test]
fn test_lowest_value_match_1() {
    assert_eq!(lowest_value_index_match(&vec![-5, -3, 2, 3]), Some(2));
}

#[test]
fn test_lowest_value_match_2() {
    assert_eq!(lowest_value_index_match(&vec![-5, -3, 1, 4]), None);
}
