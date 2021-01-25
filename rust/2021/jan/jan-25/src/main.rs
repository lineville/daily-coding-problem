// * Daily Coding Problem January 25 2021

// * [Medium] -- Given a real number n, find the square root of n. For example, given n = 9, return 3.

fn square_root_simple(n: u32) -> u32 {
    if n == 0 || n == 1 {
        return n;
    }

    let mut i = 1;
    let mut result = 1;

    while result <= n {
        i += 1;
        result = i * i;
    }
    return i - 1;
}

fn square_root_optimized(n: u32) -> u32 {
    if n == 0 || n == 1 {
        return n;
    }

    let mut start = 1;
    let mut end = n / 2;
    let mut result = 0;
    while start <= end {
        let middle = (start + end) / 2;
        if middle * middle == n {
            return middle;
        }

        if middle * middle < n {
            start = middle + 1;
            result = middle;
        } else {
            end = middle - 1;
        }
    }
    return result;
}

fn main() {
    println!("Square root of {} == {}", 4, square_root_optimized(4));
    println!("Square root of {} == {}", 5423, square_root_optimized(5423));
}

// ________________TESTS__________________

#[test]
fn test_square_root_simple_1() {
    assert_eq!(square_root_simple(4), 2);
}

#[test]
fn test_square_root_simple_2() {
    assert_eq!(square_root_simple(11), 3);
}

#[test]
fn test_square_root_optimized_1() {
    assert_eq!(square_root_optimized(4), 2);
}

#[test]
fn test_square_root_optimized_2() {
    assert_eq!(square_root_optimized(11), 3);
}

#[test]
fn test_square_root_optimized_3() {
    assert_eq!(square_root_optimized(5423), 73);
}
