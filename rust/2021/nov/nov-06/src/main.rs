// * Daily Coding Problem November 6 2021

// * [Easy] -- Google

// Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

fn can_shift(a: String, b: String) -> bool {
    if a.len() != b.len() {
        return false;
    }

    if a == b {
        return true;
    }

    let mut shifted_b = shift_string(b);

    for _ in 0..a.len() {
        if shifted_b == a {
            return true;
        }
        shifted_b = shift_string(shifted_b);
    }
    return false;
}

fn shift_string(str: String) -> String {
    if str.len() < 2 {
        return str;
    }

    let first_letter = str.chars().next().unwrap();
    let mut letters_vec = str.chars().collect::<Vec<char>>();
    letters_vec.push(first_letter);
    letters_vec.remove(0);
    return letters_vec.into_iter().collect::<String>();
}

fn main() {
    let a = "abcde";
    let b = "cdeab";
    let are_shiftable = can_shift(a.to_string(), b.to_string());
    let mut shiftable_str = "";
    if are_shiftable {
        shiftable_str = "";
    } else {
        shiftable_str = "NOT";
    }
    println!("Words: {} and {} are {} shiftable", a, b, shiftable_str);
}

#[test]
fn test_can_shift() {
    assert_eq!(can_shift("abcde".to_string(), "cdeab".to_string()), true);
    assert_eq!(can_shift("abc".to_string(), "acb".to_string()), false);
}
