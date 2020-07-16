// * Daily Coding Problem July 16 2020

// * [Medium] -- Epic

// * The "look and say" sequence is defined as follows: beginning with the
// * term 1, each subsequent term visually describes the digits appearing
// * in the previous term. The first few terms are as follows:

// * 1
// * 11
// * 21
// * 1211
// * 111221
// * 312211

// * Write a function that returns the Nth entry in this sequence

fn nth_look_and_say(n: u64) -> u64 {
    // * Base case
    if n == 0 {
        return 1;
    }

    let previous = nth_look_and_say(n - 1);
    let mut current_streak = 0;
    let mut current_digit = previous
        .to_string()
        .chars()
        .next()
        .unwrap()
        .to_digit(10)
        .unwrap();
    let mut result = String::from("");

    for digit in previous.to_string().chars() {
        let digit = digit.to_digit(10).unwrap(); // * shadowing with different type
        if digit == current_digit {
            current_streak += 1;
        } else {
            result.push_str(&current_streak.to_string());
            result.push_str(&current_digit.to_string());
            current_streak = 1;
        }
        current_digit = digit;
    }

    result.push_str(&current_streak.to_string());
    result.push_str(&current_digit.to_string());

    return result.parse().unwrap();
}

fn display_look_and_say(n: u64) -> String {
    if n == 1 {
        return n.to_string();
    }

    let phrase = n.to_string();
    let mut result = String::from("");
    let mut plural = true;
    for (i, digit) in phrase.chars().enumerate() {
        if i % 2 == 0 {
            match digit.to_digit(10) {
                Some(1) => {
                    plural = false;
                    result.push_str("One ")
                }
                Some(2) => {
                    plural = true;
                    result.push_str("Two ")
                }
                Some(3) => {
                    plural = true;
                    result.push_str("Three ")
                }
                Some(4) => {
                    plural = true;
                    result.push_str("Four ")
                }
                Some(5) => {
                    plural = true;
                    result.push_str("Five ")
                }
                Some(6) => {
                    plural = true;
                    result.push_str("Six ")
                }
                Some(7) => {
                    plural = true;
                    result.push_str("Seven ")
                }
                Some(8) => {
                    plural = true;
                    result.push_str("Eight ")
                }
                Some(9) => {
                    plural = true;
                    result.push_str("Nine ")
                }
                _ => continue,
            }
        } else {
            result.push(digit);
            if plural {
                result.push_str("'s ");
            } else {
                result.push_str(" ");
            }
        }
    }
    return result;
}

#[test]
fn test_0th_look_and_say() {
    assert_eq!(nth_look_and_say(0), 1);
}

#[test]
fn test_1st_look_and_say() {
    assert_eq!(nth_look_and_say(1), 11);
}

#[test]
fn test_2nd_look_and_say() {
    assert_eq!(nth_look_and_say(2), 21);
}

#[test]
fn test_3rd_look_and_say() {
    assert_eq!(nth_look_and_say(3), 1211);
}

#[test]
fn test_10th_look_and_say() {
    assert_eq!(nth_look_and_say(9), 13211311123113112211);
}

fn main() {
    println!("Look and say series!");
    println!(
        "{} ==> {}",
        nth_look_and_say(0),
        display_look_and_say(nth_look_and_say(0))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(1),
        display_look_and_say(nth_look_and_say(1))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(2),
        display_look_and_say(nth_look_and_say(2))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(3),
        display_look_and_say(nth_look_and_say(3))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(4),
        display_look_and_say(nth_look_and_say(4))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(5),
        display_look_and_say(nth_look_and_say(5))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(6),
        display_look_and_say(nth_look_and_say(6))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(7),
        display_look_and_say(nth_look_and_say(7))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(8),
        display_look_and_say(nth_look_and_say(8))
    );
    println!(
        "{} ==> {}",
        nth_look_and_say(9),
        display_look_and_say(nth_look_and_say(9))
    );
}
