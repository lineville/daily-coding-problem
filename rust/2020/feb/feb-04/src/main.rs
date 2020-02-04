// * Daily Coding Problem Feb 4th 2020

// * [Medium] -- Google

// ********************************

// * Given a string of words delimited by spaces, reverse the words in string. 
// ! Ex:"hello world here" -> "here world hello"

// * Follow-up: given a mutable string representation, can you perform this operation in-place?

fn reverse_words(s: &str) -> String {
    let mut word_vec : Vec<&str> = s.split_whitespace().collect();
    word_vec.reverse();
    let space_seperated = word_vec.join(" ");
    space_seperated
}

#[test]
fn test_reverse_words() {
    let example = String::from("hello world here mister man");
    let result = reverse_words(&example);
    assert_eq!(result, "man mister here world hello");
}

fn main() {
    let hello = String::from("hello world here  mister man");
    println!("{}", reverse_words(&hello));
}
