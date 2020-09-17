// * Daily Coding Problem September 17 2020

// * [Medium] -- Facebook

// * Given an integer n, find the next biggest integer with
// * the same number of 1-bits on. For example, given the
// * number 6 (0110 in binary), return 9 (1001).

fn next_biggest_same_one_bits(n: u32) -> u32 {
    let num_ones = num_one_bits(n);
    let mut next = n + 1;

    while num_one_bits(next) != num_ones {
        next += 1;
    }

    return next;
}

fn num_one_bits(n: u32) -> usize {
    let binary = format!("{:b}", n);
    let ones: Vec<char> = binary.chars().filter(|&b| b == '1').collect();
    return ones.len();
}

fn main() {
    println!("Next biggest number with same number of 1-bits!");
    let n = 6;
    println!("{} ({:b})", n, n);
    let next_biggest = next_biggest_same_one_bits(n);
    println!("{} ({:b})", next_biggest, next_biggest);
}

// * ------------------TESTS ------------------------------

#[test]
fn test_next_biggest_same_one_bits() {
    assert_eq!(next_biggest_same_one_bits(6), 9);
}
