// * Daily Coding Problem Feb 5th 2020

// * [Hard] -- Facebook

// ********************************

// * Given a string and a set of delimiters, reverse the words in the string 
// * while maintaining the relative order of the delimiters. 

// ! Ex: "hello/world:here"  -> "here/world:hello"

// * Does your solution work for the following cases: 
// * Delimeter then empty string : "hello/world:here/" 
// * Delimeter is more than one non-alphanumeric character "hello//world:here"

// * Takes the input string, splits it on white space, maps each entry
// * from &str to String, reverses the vector and joins those elements with whitespace
fn reverse_words_delimiters(s: String) -> String {
    let mut delimiters_vec  : Vec<String> = Vec::new();
    let mut word_vec : Vec<String> = s.split(|c : char| {
        // * This does not check for multi-character delimiters
        if !c.is_alphanumeric() {
            delimiters_vec.push(c.to_string());
        }
        !c.is_alphanumeric()
    }).map(|w| w.to_string()).collect();

    word_vec.reverse();
    println!("{:?}", delimiters_vec);
    word_vec.join(".")

}


fn reverse_words_delimiters_v2(word: String) -> String {
    // let mut words : Vec<String> = Vec::new();
    // let mut delimiters : Vec<String> = Vec::new();
    

    // let current_word_ref = &mut String::from("");
    // let current_delimiter_ref = &mut String::from("");
    // let mut previous_was_delim : bool = false;

    // for (i, c) in word.chars().enumerate() {
    //     if c.is_alphanumeric() {
    //         if previous_was_delim && i != 0 {
    //             delimiters.push(current_delimiter_ref.to_string());
    //         }
    //         current_word_ref.push(c);
    //     } else {
    //         // * This is a delimiters
    //         if previous_was_delim {
    //             current_word_ref.push(c);
    //         } else {
    //             words.push(current_word_ref.to_string());

    //         }
    //     }
    // }

    word
}



#[test]
fn test_reverse_words_delimiters1() {
    let example = String::from("hello/world:here");
    let result = reverse_words_delimiters(example);
    assert_eq!(result, "here/world:hello");
}

#[test]
fn test_reverse_words_delimiters2() {
    let example = String::from("hello/world:here/");
    let result = reverse_words_delimiters(example);
    assert_eq!(result, "here/world:hello/");
}

#[test]
fn test_reverse_words_delimiters3() {
    let example = String::from("hello//world:here");
    let result = reverse_words_delimiters(example);
    assert_eq!(result, "here//world:hello");
}

fn main() {
    let hello = String::from("hello/world:here");
    println!("{}", reverse_words_delimiters(hello));
}
