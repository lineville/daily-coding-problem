// * Daily Coding Problem October 29 2020

// * [Easy] -- Microsoft

// * Given a string, generate all possible subsequences of the string.

// ! Ex: "xyz" --> [x, y, z, xy, xz, yz, xyz]
// ! Ex: "abcd" --> [a, b, c, d, ab, ac, ad, bc, bd, cd, abc, abd, acd, bcd, abcd]
// * Note that zx is not allowed since it is not in the order of the strings
// * -- that just means this problem is not the same as just all permutations

use std::collections::HashSet;

fn subsequences(s: String) -> Vec<String> {
    let mut subs = HashSet::<String>::new();
    let result = subsequences_recursive(s, &mut subs);
    return result;
}

fn subsequences_recursive(s: String, subs: &mut HashSet<String>) -> Vec<String> {
    if s.len() == 0 {
        let mut result: Vec<String> = vec![];
        for word in subs.iter() {
            result.push(word.to_string());
        }
        return result;
    }

    let mut result: Vec<String> = vec![];
    if subs.contains(&s) {
        subs.insert(s.to_string());

        for (i, _c) in s.chars().enumerate() {
            let mut temp = s.clone();
            temp = format!("{}{}", &temp[0..i], &temp[..i + 1]);
            let rec_result = subsequences_recursive(temp, subs);
            for word in rec_result.iter() {
                result.push(word.to_string());
            }
        }
    }

    return result;
}

fn main() {
    let input_str = String::from("xyz");
    let result = subsequences(input_str.clone());
    println!("All subsequences of a string!\n-------------------\n");
    println!("{} --> {:?}", input_str, result);
}

// * _____________________TESTS_________________________

#[test]
fn test_subsequences_1() {
    assert_eq!(
        subsequences(String::from("xyz")),
        vec!["x", "y", "z", "xy", "xz", "yz", "xyz"]
    );
}

#[test]
fn test_subsequences_2() {
    assert_eq!(
        subsequences(String::from("abcd")),
        vec![
            "a", "b", "c", "d", "ab", "ac", "ad", "bc", "bd", "cd", "abc", "abd", "acd", "bcd",
            "abcd"
        ]
    );
}
