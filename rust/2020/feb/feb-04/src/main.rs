// * Daily Coding Problem Feb 4th 2020

// * [Medium] -- Google

// ********************************

// * Given a string of words delimited by spaces, reverse the words in string. 
// ! Ex:"hello world here" -> "here world hello"

// * Follow-up: given a mutable string representation, can you perform this operation in-place?

// * Takes the input string, splits it on white space, maps each entry
// * from &str to String, reverses the vector and joins those elements with whitespace
fn reverse_words(s: String) -> String {
    let mut word_vec : Vec<String> = s.split_whitespace().map(|w| w.to_string()).collect();
    word_vec.reverse();
    word_vec.join(" ")
}

#[test]
fn test_reverse_words() {
    let example = String::from("hello world here mister man");
    let result = reverse_words(example);
    assert_eq!(result, "man mister here world hello");
}

fn main() {
    let hello = String::from("hello world here  mister man");
    println!("{}", reverse_words(hello));
}
