// * Daily Coding Problem November 2 2020

// * [Medium] -- Gusto

// * Implement the function embolden(s, lst) which takes in a string s and list of substrings lst,
// * and wraps all substrings in s with an HTML bold tag <b> and </b>.

// * If two bold tags overlap or are contiguous, they should be merged.

fn embolden(s: &str, list: Vec<String>) -> String {
    let mut result = String::from(s);

    return result;
}

fn main() {
    println!("Embolden text!\n\n------------------");
    let text = "abcdefg";
    let list = vec![String::from("bc"), String::from("ef")];
    let result = embolden(text, list);
    println!("{} --> {}", text, result);
}

// * _______________________TESTS_____________________

#[test]
fn test_embolden_1() {
    let text = "abcdefg";
    let list = vec![String::from("bc"), String::from("ef")];
    assert_eq!(embolden(text, list), String::from("a<b>bc</b>d<b>ef</b>g"));
}

#[test]
fn test_embolden_2() {
    let text = "abcdefg";
    let list = vec![String::from("bcd"), String::from("def")];
    assert_eq!(embolden(text, list), String::from("a<d>bcdef</b>g"));
}
