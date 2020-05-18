// * Daily Coding Problem May 18 2020

// * [Hard] -- Oracle

// * We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not.
// * For a given input N, find the smallest sparse number greater than or equal to N.

// ! Constraint: Do this in O(N * log(N)) Time complexity

// * Unclear what Time complexity is, its really Y - X where Y is the found solution (not known at run time) and X is input num
fn smallest_sparse_greater_than(num: u64) -> u64 {
    let mut current: u64 = num + 1;

    while !is_sparse(current) {
        current += 1;
    }
    return current;
}

// * Time: O(1) since this scales linearly with number of bits in num which is at most 64. O(64) -> O(1)
// * Space: O(1) only requires one string to store the converted bits and one extra char to track the previously seen bit.
fn is_sparse(num: u64) -> bool {
    let bits = format!("{:b}", num);
    let mut previous_bit: char = '0';

    for bit in bits.chars() {
        if previous_bit == '1' && bit == '1' {
            return false;
        }
        previous_bit = bit;
    }
    return true;
}

#[test]
fn test_is_sparse_1() {
    assert_eq!(is_sparse(21), true);
}

#[test]
fn test_is_sparse_2() {
    assert_eq!(is_sparse(22), false);
}

#[test]
fn test_smallest_sparse_greater_than_20() {
    assert_eq!(smallest_sparse_greater_than(20), 21);
}

#[test]
fn test_smallest_sparse_greater_than_40() {
    assert_eq!(smallest_sparse_greater_than(40), 41);
}

#[test]
fn test_smallest_sparse_greater_than_60() {
    assert_eq!(smallest_sparse_greater_than(60), 64);
}

fn main() {
    println!(
        "Smallest Sparse Number greater than {} ( {:b} ) --> {} ( {:b} )",
        20,
        20,
        smallest_sparse_greater_than(20),
        smallest_sparse_greater_than(20)
    );
}
