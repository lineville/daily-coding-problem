// * Daily Coding Problem July 28 2020

// * [Medium] -- Quora

// * You are given a list of (website, user) pairs that represent users
// * visiting websites. Come up with a program that identifies the top
// * k pairs of websites with the greatest similarity.

// ! Ex:
// ! [('a', 1), ('a', 3), ('a', 5),
// !  ('b', 2), ('b', 6),
// !  ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5)
// !  ('d', 4), ('d', 5), ('d', 6), ('d', 7),
// !  ('e', 1), ('e', 3), ('e': 5), ('e', 6)]
// * If k = 1 it should return pair [('a', 'e')] since they are most similar

use std::collections::HashMap;

fn most_similar(website_stats: Vec<(char, u32)>, _k: u32) -> Vec<(char, char)> {
    let result: Vec<(char, char)> = vec![];
    let mut map: HashMap<char, &Vec<u32>> = HashMap::new();
    // TODO
    // for &(user, site) in website_stats.iter() {
    //     match map.get(&user) {
    //         Some(v) => {
    //             if !v.contains(&site) {
    //                 map.insert(user, v);
    //             }
    //         }
    //     }
    // }

    return result;
}

#[test]
fn test_most_similar_1() {
    let website_stats: Vec<(char, u32)> = vec![
        ('a', 1),
        ('a', 3),
        ('b', 2),
        ('b', 6),
        ('c', 1),
        ('c', 2),
        ('c', 3),
        ('c', 4),
        ('c', 5),
        ('d', 4),
        ('d', 5),
        ('d', 6),
        ('d', 7),
        ('e', 1),
        ('e', 3),
        ('e', 5),
        ('e', 6),
    ];
    assert_eq!(most_similar(website_stats, 1), vec![('a', 'e')]);
}

fn main() {
    let website_stats: Vec<(char, u32)> = vec![
        ('a', 1),
        ('a', 3),
        ('b', 2),
        ('b', 6),
        ('c', 1),
        ('c', 2),
        ('c', 3),
        ('c', 4),
        ('c', 5),
        ('d', 4),
        ('d', 5),
        ('d', 6),
        ('d', 7),
        ('e', 1),
        ('e', 3),
        ('e', 5),
        ('e', 6),
    ];
    let k = 1;
    let most_similar_pair = most_similar(website_stats, k);
    println!("Most similar users are {:?}", most_similar_pair);
}
