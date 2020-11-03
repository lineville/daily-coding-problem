// * Daily Coding Problem November 2 2020

// * [Medium] -- Gusto

// * Implement the function embolden(s, lst) which takes in a string s and list of substrings lst,
// * and wraps all substrings in s with an HTML bold tag <b> and </b>.

// * If two bold tags overlap or are contiguous, they should be merged.

fn embolden(s: &str, list: Vec<&str>) -> String {
    let mut result = String::from(s);
    let starting_indexes: Vec<usize> = list.iter().map(|sub| s.find(sub).unwrap()).collect();
    for (_i, &idx) in starting_indexes.iter().enumerate() {
        result.insert_str(idx, "<b>");
    }
    return result;
}

fn main() {
    println!("Embolden text!\n\n------------------");
    let text = "abcdefg";
    let list = vec!["bc", "ef"];
    let result = embolden(text, list);
    println!("{} --> {}", text, result);
}

// * _______________________TESTS_____________________

#[test]
fn test_embolden_1() {
    let text = "abcdefg";
    let list = vec!["bc", "ef"];
    assert_eq!(embolden(text, list), String::from("a<b>bc</b>d<b>ef</b>g"));
}

#[test]
fn test_embolden_2() {
    let text = "abcdefg";
    let list = vec!["bcd", "def"];
    assert_eq!(embolden(text, list), String::from("a<d>bcdef</b>g"));
}
