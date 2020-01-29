// * Daily Coding Problem Jan 29 2020

// * Print the nodes in a binary tree level-wise.
// ! Ex:        1
// !           / \
// !          2  3
// !            / \
// !           4   5

// * should print 1, 2, 3, 4, 5.
use trees::{tr,Node};
use std::fmt::Display;

// * Work smart not hard. If the Binary tree library has a built in
// * to string method that shows the tree level by level. Just do some
// * string formatting and call it a day.
fn main() {
    let tree = tr(1)
                    /( tr(2) )
                    /( tr(3) 
                        /tr(4)
                        /tr(5) );
    
                
    let mut string_tree = tree.to_string();
    string_tree = string_tree.replace("(", "");  
    string_tree = string_tree.replace(")", "");  
    println!("{}", string_tree);
}
