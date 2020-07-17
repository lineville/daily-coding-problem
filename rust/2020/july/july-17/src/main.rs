// * Daily Coding Problem July 17

// * [Hard] -- Dropbox

// * Implement an efficient string matching algorithm.

// * That is, given a string of length N and a pattern of length k,
// * write a program that searches for the pattern in the string with
// * less than O(N * k) worst-case time complexity.

// * If the pattern is found, return an array of all the starting indices
// * If not, return False.

// * Implementation of KMP Pattern Searching algorithm from : https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
fn find_pattern_kmp(pattern: &str, text: &str) -> Result<Vec<usize>, bool> {
    let mut result: Vec<usize> = vec![];
    let longest_prefix_suffixes: Vec<usize> = compute_lps(pattern);
    let mut i: usize = 0;
    let mut j: usize = 0;

    while i < text.len() {
        if pattern.chars().nth(j) == text.chars().nth(j) {
            i += 1;
            j += 1;
        }
        if j == pattern.len() {
            result.push(i - j);
            j = longest_prefix_suffixes[j - 1];
        } else if i < text.len() && pattern.chars().nth(j) != text.chars().nth(i) {
            if j != 0 {
                j = longest_prefix_suffixes[j - 1];
            } else {
                i += 1;
            }
        }
    }
    match result.len() {
        0 => Err(false),
        _ => Ok(result),
    }
}

fn compute_lps(pattern: &str) -> Vec<usize> {
    let mut result: Vec<usize> = vec![0];
    let mut len = 0;
    let mut i = 1;

    while i < pattern.len() {
        if pattern.chars().nth(i) == pattern.chars().nth(len) {
            len += 1;
            result.push(len);
            i += 1;
        } else {
            if len != 0 {
                len = result[len - 1];
            } else {
                result.push(len);
                i += 1;
            }
        }
    }

    return result;
}

fn find_pattern_naive(pattern: &str, text: &str) -> Result<Vec<usize>, bool> {
    let mut result: Vec<usize> = vec![];
    for i in 0..text.len() - pattern.len() {
        let slice = &text[i..i + pattern.len()];
        if slice == pattern {
            result.push(i);
        }
    }
    match result.len() {
        0 => Err(false),
        _ => Ok(result),
    }
}

#[test]
fn test_find_pattern_naive_1() {
    assert_eq!(
        find_pattern_naive("AAA", "AAAAABAAABA").unwrap(),
        vec![0, 1, 2, 6]
    );
}

#[test]
fn test_find_pattern_kmp_1() {
    assert_eq!(
        find_pattern_kmp("AAA", "AAAAABAAABA").unwrap(),
        vec![0, 1, 2, 6]
    );
}

fn main() {
    let pattern = "AAA";
    let text = "AAAAABAAABA";
    println!("Looking for pattern {} in text {}", pattern, text);

    match find_pattern_naive(pattern, text) {
        Ok(indexes) => println!("Found pattern at indices {:?}", indexes),
        Err(_) => println!("Pattern could not be found in text"),
    }

    match find_pattern_kmp(pattern, text) {
        Ok(indexes) => println!("Found pattern at indices {:?}", indexes),
        Err(_) => println!("Pattern could not be found in text"),
    }
}
