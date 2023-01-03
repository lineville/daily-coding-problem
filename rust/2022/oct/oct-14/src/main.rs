// Daily Coding Problem Oct 14 2022

// Hard -- Amazon

// Suppose you have N men and N women, and each person has ranked their prospective
// opposite-sex partners in order of preference.

// For example, if N = 3, the input could be something like this
// guy_preferences = {
//     'andrew': ['caroline', 'abigail', 'betty'],
//     'bill': ['caroline', 'betty', 'abigail'],
//     'chester': ['betty', 'caroline', 'abigail'],
// }

// gal_preferences = {
//     'abigail': ['andrew', 'bill', 'chester'],
//     'betty': ['bill', 'andrew', 'chester'],
//     'caroline': ['bill', 'chester', 'andrew']
// }

// Write an algorithm that pairs the men and women together in such a way that no
// two people of opposite sex would both rather be with each other than with their current partners.

use std::collections::HashMap;

fn create_marriages<'a>(
    guy_prefs: HashMap<&'a str, Vec<&'a str>>,
    gal_prefs: HashMap<&'a str, Vec<&'a str>>,
) -> Vec<(&'a str, &'a str)> {
    let mut marriages: Vec<(&str, &str)> = Vec::new();

    // Need to pair up guys and gals such that no 2 people would prefer to be together vs their assigned partner


    marriages
}

fn main() {
    let mut guy_prefs: HashMap<&str, Vec<&str>> = HashMap::new();
    guy_prefs.insert("andrew", ["caroline", "abigail", "betty"].to_vec());
    guy_prefs.insert("bill", ["caroline", "betty", "abigail"].to_vec());
    guy_prefs.insert("chester", ["betty", "caroline", "abigail"].to_vec());

    println!("\nGuy Preferences\n--------------\n");
    for (guy, prefs) in guy_prefs.iter() {
        println!("{}: {:?}", guy, prefs);
    }
    
    let mut gal_prefs: HashMap<&str, Vec<&str>> = HashMap::new();
    gal_prefs.insert("abigail", ["andrew", "bill", "chester"].to_vec());
    gal_prefs.insert("betty", ["bill", "andrew", "chester"].to_vec());
    gal_prefs.insert("caroline", ["bill", "chester", "andrew"].to_vec());

    println!("\nGal Preferences\n--------------\n");
    for (gal, prefs) in gal_prefs.iter() {
        println!("{}: {:?}", gal, prefs);
    }

    let marriages = create_marriages(guy_prefs, gal_prefs);
    
    println!("\nMarriages\n-----------------------\n");
    for (gal, guy) in marriages.iter() {
        println!("{} ♥️ {}", gal, guy);
    }
}
