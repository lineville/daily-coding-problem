// * Daily Coding Problem Dec 9th 2020

// * [Easy] -- Microsoft

// * A number is considered perfect if its digits sum up to exactly 10.

// * Given a positive integer n, return the n-th perfect number.

// * For example, given 1, you should return 19. Given 2, you should return 28.

fn nth_perfect_number(n: u32) -> u32 {
    let mut current = 1;
    let mut perfect_numbers = 0;

    while perfect_numbers < n {
        if is_perfect(current) {
            perfect_numbers += 1;
        }
        current += 1;
    }
    return current - 1;
}

fn is_perfect(n: u32) -> bool {
    let digit_sum: u32 = n.to_string().chars().map(|c| c.to_digit(10).unwrap()).sum();
    return digit_sum == 10;
}

fn main() {
    let n = 2;
    let result = nth_perfect_number(n);
    println!("{}th perfect number is {}", n, result);
}

// * _____________________TESTS___________________________________

#[test]
fn test_1st_perfect_number() {
    assert_eq!(nth_perfect_number(1), 19);
}

#[test]
fn test_2nd_perfect_number() {
    assert_eq!(nth_perfect_number(2), 28);
}
