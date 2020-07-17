// * Daily Coding Problem July 17

// * [Hard] -- Dropbox

// * Implement an efficient string matching algorithm.

// * That is, given a string of length N and a pattern of length k,
// * write a program that searches for the pattern in the string with
// * less than O(N * k) worst-case time complexity.

// * If the pattern is found, return an array of all the starting indices
// * If not, return False.

fn find_pattern(pattern: &str, text: &str) -> Result<Vec<usize>, bool> {
    Ok(vec![0])
}

#[test]
fn test_find_pattern_1() {
    assert_eq!(
        find_pattern("AAA", "AAAAABAAABA").unwrap(),
        vec![0, 1, 2, 6]
    );
}

fn main() {
    let pattern = "AAA";
    let text = "AAAAABAAABA";
    println!("Looking for pattern {} in text {}", pattern, text);

    match find_pattern(pattern, text) {
        Ok(indexes) => println!("Found pattern at indices {:?}", indexes),
        Err(_) => println!("Pattern could not be found in text"),
    }
}
