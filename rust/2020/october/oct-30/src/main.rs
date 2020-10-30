// * Daily Coding Problem October 30 2020 2016

// * [Medium] -- Nextdoor

// * Implement integer division without using the division operator.
// * Your function should return a tuple of (dividend, remainder) and it
// * should take two numbers, the product and divisor.

// ! Ex: divide(10, 3) should return (3, 1) since the divisor is 3 and the remainder is 1.

// ! Bonus points: Do this in O(log n) time

fn divide(product: u32, divisor: u32) -> (u32, u32) {
    let mut dividend = 0;
    let mut current = 0;
    while current + divisor < product {
        current += divisor;
        dividend += 1;
    }

    (dividend, product - current)
}

fn main() {
    let product = 10;
    let divisor = 3;
    let result = divide(product, divisor);
    println!(
        "{} / {} = {} (remainder: {})",
        product, divisor, result.0, result.1
    );
}

// ________________________TESTS___________________________

#[test]
fn test_divide_1() {
    assert_eq!(divide(10, 3), (3, 1));
}

#[test]
fn test_divide_2() {
    assert_eq!(divide(22, 7), (3, 1));
}

#[test]
fn test_divide_3() {
    assert_eq!(divide(25, 30), (0, 25));
}
