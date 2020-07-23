// * Daily Coding Problem July 20 2020

// * [Easy] -- Twitter

// * A classroom consists of N students, whose friendships can be represented
// * in an adjacency list. For example, the following descibes a situation
// * where 0 is friends with 1 and 2, 3 is friends with 6, and so on.

// ! Ex:
// ! {0: [1, 2],
// !  1: [0, 5],
// !  2: [0],
// !  3: [6],
// !  4: [],
// !  5: [1],
// !  6: [3]}

// * Each student can be placed in a friend group, which can be defined as
// * the transitive closure of that student's friendship relations. In other
// * words, this is the smallest set such that no student in the group has
// * any friends outside this group. For the example above, the friend groups
// * would be {0, 1, 2, 5}, {3, 6}, {4}.

// * Given a friendship list such as the one above, determine the number of
// * friend groups in the class.

use std::collections::HashMap;

fn friend_groups_count(friendships: &HashMap<u32, Vec<u32>>) -> usize {
    let mut groups: Vec<Vec<u32>> = vec![];

    for (&person, friends) in friendships {
        // TODO Bug here groups aren't quite right but num of groups still valid
        if !exists_in_any_group(person, &groups) && !friends_exist_in_any_group(friends, &groups) {
            let mut new_group = friends.clone();
            new_group.push(person);
            groups.push(new_group);
        } else {
            let people = &[&vec![person], &friends[..]].concat();
            let existing_group_index = group_to_add_friends(people, &groups);
            groups[existing_group_index].push(person);
            for &p in friends.iter() {
                groups[existing_group_index].push(p);
            }
        }
    }
    println!("{:?}", groups);
    return groups.len();
}

// TODO Write function that returns Result<usize, Err> based on whether or not we
// * can find one of the people in a group or not. Then match on that in the main function

// * Returns the index of the group in which we should add person and friends to.
// * We assume that either person, or one of friends resides in one of the groups
fn group_to_add_friends(people: &Vec<u32>, groups: &Vec<Vec<u32>>) -> usize {
    for (i, &p) in people.iter().enumerate() {
        if exists_in_any_group(p, groups) {
            return i;
        }
    }
    panic!("Could not find any of the people in any of the groups");
}

// * Returns true if person exists in any of the groups, otherwise false.
fn exists_in_any_group(person: u32, groups: &Vec<Vec<u32>>) -> bool {
    for group in groups.iter() {
        for &friend in group.iter() {
            if person == friend {
                return true;
            }
        }
    }

    return false;
}

// * Returns true if any member of group exists in any of the groups, otherwise false
fn friends_exist_in_any_group(group: &Vec<u32>, groups: &Vec<Vec<u32>>) -> bool {
    group
        .into_iter()
        .map(|&p| exists_in_any_group(p, groups))
        .fold(false, |acc, exists| acc || exists)
}

#[test]
fn test_exists_in_any_group_1() {
    assert_eq!(
        exists_in_any_group(1, &vec![vec![0, 2, 4], vec![9, 3], vec![9, 1, 3]]),
        true
    );
}

#[test]
fn test_exists_in_any_group_2() {
    assert_eq!(
        exists_in_any_group(1, &vec![vec![0, 2, 4], vec![9, 3], vec![9, 7, 3]]),
        false
    );
}

#[test]
fn test_friends_exist_in_any_group_1() {
    assert_eq!(
        friends_exist_in_any_group(&vec![1, 2], &vec![vec![9, 8, 5], vec![5, 4], vec![4, 3, 2]]),
        true
    )
}

#[test]
fn test_friends_exist_in_any_group_2() {
    assert_eq!(
        friends_exist_in_any_group(&vec![1, 2], &vec![vec![9, 8, 5], vec![5, 4], vec![4, 3, 0]]),
        false
    )
}

#[test]
fn test_friend_group_count_1() {
    let mut friendships: HashMap<u32, Vec<u32>> = HashMap::new();
    friendships.insert(0, vec![1, 2]);
    friendships.insert(1, vec![0, 5]);
    friendships.insert(2, vec![0]);
    friendships.insert(3, vec![6]);
    friendships.insert(4, vec![]);
    friendships.insert(5, vec![1]);
    friendships.insert(6, vec![3]);
    assert_eq!(friend_groups_count(&friendships), 3);
}

fn main() {
    let mut friendships: HashMap<u32, Vec<u32>> = HashMap::new();
    friendships.insert(1, vec![0, 5]);
    friendships.insert(2, vec![0]);
    friendships.insert(3, vec![6]);
    friendships.insert(4, vec![]);
    friendships.insert(5, vec![1]);
    friendships.insert(6, vec![3]);
    println!("Friendships: {:?}", friendships);
    println!(
        "There are {} friend groups among those friends",
        friend_groups_count(&friendships),
    );
}
