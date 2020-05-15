// * Daily Coding Problem May 15 2020

// * [Easy] -- Stripe

// * Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

// ! Ex: 156 -> 3

fn longest_binary_ones_representation(num: u64) -> u64 {
    let binary_string = format!("{:b}", num);
    let mut longest_streak : u64 = 0;
    let mut current_streak : u64 = 0;
    for c in binary_string.chars() {
        if c == '1' {
            current_streak += 1;
            if current_streak > longest_streak {
                longest_streak = current_streak;
            }
        } else {
            current_streak = 0;
        }
    }

    return longest_streak;
} 

#[test]
fn test_longest_binary_ones_representation_1() {
    assert_eq!(longest_binary_ones_representation(156), 3);
}

#[test]
fn test_longest_binary_ones_representation_2() {
    assert_eq!(longest_binary_ones_representation(255), 8);
}

#[test]
fn test_longest_binary_ones_representation_3() {
    assert_eq!(longest_binary_ones_representation(256), 1);
}


fn main() {
    println!("Longest streak of ones in {} binary: {:#b} --> {}", 256, 256, longest_binary_ones_representation(256));
}
