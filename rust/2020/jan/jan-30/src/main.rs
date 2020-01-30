// * Daily Coding Problem Jan 30 2020

// * [Easy] -- Google

// * Given two strings A and B, return whether or not A can be shifted some number of times to get B.

// ! Ex: A = "abcde", B = "cdeab" -> true
// ! Ex: A = "abcd", B = "acbd" -> false


// * Creates a mutable copy of A, pushes A onto A creating a string that would have
// * to contain a rotation of itself by definition. Therefore if B is contained in this new
// * string that is 2 A's and they have the same length we know that B is a rotation of A.
fn word_shift(a: String, b: String) -> bool {
    let mut a_twice = a.clone();
    a_twice.push_str(&a_twice.clone());
    let equal_lengths = a.len() == b.len();
    return equal_lengths && a_twice.contains(&b);
}



#[cfg(test)]
mod tests {
    
    use super::*;
    
    #[test]
    fn test_word_shift1() {
        let a = String::from("abcde");
        let b = String::from("cdeab");
        let result: bool = word_shift(a, b);
        assert_eq!(result, true);
    }

    #[test]
    fn test_word_shift2() {
        let a = String::from("abcd");
        let b = String::from("acbd");
        let result: bool = word_shift(a, b);
        assert_eq!(result, false);
    }

    #[test]
    fn test_word_shift3() {
        let a = String::from("abcd");
        let b = String::from("ab");
        let result: bool = word_shift(a, b);
        assert_eq!(result, false);
    }

    #[test]
    fn test_word_shift4() {
        let a = String::from("abcdef");
        let b = String::from("defabc");
        let result: bool = word_shift(a, b);
        assert_eq!(result, true);
    }

}

fn main() {
    println!("Daily Coding Problem Jan 30th");
}
