// Implement an autocomplete system. That is, given a query string s and a set 
// of all possible query strings, return all strings in the set that have s as 
// a prefix. For example, given the query string de and the set of 
// strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient 
// data structure to speed up queries.

// Define Trie class

// Create a trie of all the words in the dictionary.

// Define a Trie struct

use std::collections::HashMap;

struct Trie {
    children: HashMap<char, Trie>,
    is_word: bool,
}

fn create_trie(dictionary: &Vec<String>) -> Trie {
    let mut trie = Trie::new();
    for word in dictionary {
        trie.insert(word);
    }
    trie
}

fn main() {
    println!("Hello, world!");
}
