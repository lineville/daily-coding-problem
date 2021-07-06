// * Daily Coding Problem July 6th 2021

// * [Easy] -- Stripe

// Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

// For example, given 156, you should return 3.

fn longest_streak_of_ones(n: u32) -> u32 {
    let binary = format!("{:b}", n);

    let mut longest_streak = 0;
    let mut current_streak = 0;

    for bit in binary.chars() {
        if bit == '1' {
            current_streak += 1;
        } else {
            if current_streak > longest_streak {
                longest_streak = current_streak;
            }
            current_streak = 0;
        }
    }

    return longest_streak;
}

fn main() {
    let n = 156;
    let binary = format!("{:b}", n);
    println!("{} --> {} --> # of 1's: {}", n, binary, longest_streak_of_ones(n));
}

#[test]
fn test_longest_streak_of_ones_1() {
    assert_eq!(longest_streak_of_ones(156), 3);
}

#[test]
fn test_longest_streak_of_ones_2() {
    assert_eq!(longest_streak_of_ones(160), 1);
}
