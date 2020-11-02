// * Daily Coding Problem November 2 2020

// * [Medium] -- Gusto

// *

fn embolden(s: String, list: Vec<String>) -> String {
    let mut result = String::new();

    return result;
}

fn main() {
    println!("Embolden text!\n\n------------------");
    let text = String::from("abcdefg");
    let list = vec!["bc", "ef"];
}

#[test]
fn test_embolden_1() {
    let text = String::from("abcdefg");
    let list = vec![String::from("bc"), String::from("ef")];
    assert_eq!(embolden(text, list), String::from("a<b>bc</b>d<b>ef</b>g"));
}
