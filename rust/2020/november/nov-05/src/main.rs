// * Daily Coding Problem November 5 2020

// * [Easy] -- Twitter

// * Given a string, sort it in decreasing order based on the frequency of chars.
// * If there's multiple solutions any of them are fine

// ! Ex: "tweet" --> "tteew" or "eettw"

use std::collections::HashMap;

fn sorted_by_char_count(s: &str) -> String {
    // * Create a map of chars --> frequency
    let mut letter_counts = HashMap::<char, u32>::new();
    for c in s.to_lowercase().chars() {
        *letter_counts.entry(c).or_insert(0) += 1;
    }

    // * Construct a sorted vector of tuples from the map entries ordered by frequency
    let mut count_vec: Vec<(&char, &u32)> = letter_counts.iter().collect();
    count_vec.sort_by(|a, b| b.1.cmp(a.1));

    return count_vec
        .iter()
        .map(|(&c, &count)| n_chars(c, count))
        .collect();
}

// * Creates a string of n many characters c. Ex: n_chars('a', 3) == "aaa"
fn n_chars(c: char, n: u32) -> String {
    let mut result = String::new();
    for _i in 0..n {
        result.push(c);
    }
    return result;
}

fn main() {
    let s = "tweet";
    let result = sorted_by_char_count(&s);
    println!(
        "Sorted by char count\n-----------------\n{} --> {}",
        s, result
    );
}

// * ________________________TESTS___________________________

#[test]
fn test_sorted_by_char_count_1() {
    assert_eq!(sorted_by_char_count("tweeet"), "eeettw");
}

#[test]
fn test_sorted_by_char_count_2() {
    let valid_results = vec![String::from("tteew"), String::from("eettw")];
    assert!(valid_results.contains(&sorted_by_char_count("tweet")));
}
