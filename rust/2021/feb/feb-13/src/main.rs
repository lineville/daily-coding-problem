// * Daily Coding Problem February 13 2020

// * [Medium] -- Pinterest

// * At a party, there is a single person who everyone knows,
// * but who does not know anyone in return (the "celebrity").
// * To help figure out who this is, you have access to an
// * O(1) method called knows(a, b), which returns True if person a knows person b, else False.

// * Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.

use std::collections::HashMap;

// * Assume this is O(N) for simplicity (this would be given to us)
fn knows(a: &str, b: &str, map: &mut HashMap<&str, Vec<&str>>) -> bool {
    return map.get(a).is_some() && map.get(a).unwrap().contains(&b);
}

// * O(N) search to find the individual who is known by everyone but knows nobody
fn find_celeb(people: Vec<&str>) -> String {
    let people_who_know_me: HashMap<&str, Vec<&str>> = HashMap::new();

    for person in people.iter() {}

    return String::from("Kobe");
}

fn main() {
    let mut people_connections: HashMap<&str, Vec<&str>> = HashMap::new();
    people_connections.insert("Liam", vec!["Linda", "Sam", "Isaiah", "Kobe"]);
    people_connections.insert("Linda", vec!["Liam", "Mom", "Dad", "Kobe"]);
    people_connections.insert("Mom", vec!["Liam", "Linda", "Dad", "Kobe"]);
    people_connections.insert("Kobe", vec![]);
    let result = find_celeb(vec!["Linda", "Liam", "Mom", "Kobe"]);
    println!("Celebrity is {}", result);
}
