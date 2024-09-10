// Write a program that determines the smallest number of perfect squares that sum up to N.

fn num_squares(n: i32) -> i32 {
    let mut dp = vec![0; n as usize + 1];
    for i in 1..=n {
        let mut min = i;
        let mut j = 1;
        while j * j <= i {
            min = min.min(dp[(i - j * j) as usize] + 1);
            j += 1;
        }
        dp[i as usize] = min;
    }
    dp[n as usize]
}

fn main() {
    println!("{}", num_squares(4));
    println!("{}", num_squares(17));
    println!("{}", num_squares(18));
}

#[test]
fn test_num_squares() {
    assert_eq!(num_squares(4), 1);
    assert_eq!(num_squares(17), 2);
    assert_eq!(num_squares(18), 2);
}
