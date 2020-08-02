// * Daily Coding Problem August 2nd 2020

// * [Hard] -- Twitter

// * A teacher must divide a class of students into two teams to play dodgeball.
// * Unfortunately, not all the kids get along, and several refuse to be put on
// * the same team as that of their enemies. Given an adjacency list of students
// * and their enemies, write an algorithm that finds a satisfactory pair of
// * teams, or returns False if none exists.

// ! Ex: For these students the teams should be {0, 1, 4, 5} and {2, 3}

// ! students = {
// !     0: [3],
// !     1: [2],
// !     2: [1, 4],
// !     3: [0, 4, 5],
// !     4: [2, 3],
// !     5: [3]
// ! }

// ! Ex 2 : This should return False
// ! students = {
// !     0: [3],
// !     1: [2],
// !     2: [1, 3, 4],
// !     3: [0, 2, 4, 5],
// !     4: [2, 3],
// !     5: [3]
// ! }
use std::collections::HashSet;

fn dodgeball_teams(students: Vec<Vec<usize>>) -> Option<(HashSet<usize>, HashSet<usize>)> {
    let mut first_team: HashSet<usize> = HashSet::new();
    let mut second_team: HashSet<usize> = HashSet::new();

    for (student, enemies) in students.iter().enumerate() {
        if first_team.is_empty() || !second_team.contains(&student) {
            first_team.insert(student);
            for enemy in enemies.iter() {
                second_team.insert(*enemy);
            }
        } else if second_team.is_empty() || !first_team.contains(&student) {
            second_team.insert(student);
            for enemy in enemies.iter() {
                first_team.insert(*enemy);
            }
        }
    }

    if first_team.len() + second_team.len() == students.len() {
        return Some((first_team, second_team));
    } else {
        return None;
    }
}

#[test]
fn test_dodgeball_teams_1() {
    let students: Vec<Vec<usize>> = vec![
        vec![3],
        vec![2],
        vec![1, 4],
        vec![0, 4, 5],
        vec![2, 3],
        vec![3],
    ];

    let mut first_team: HashSet<usize> = HashSet::new();
    first_team.insert(0);
    first_team.insert(1);
    first_team.insert(4);
    first_team.insert(5);
    let mut second_team: HashSet<usize> = HashSet::new();
    second_team.insert(2);
    second_team.insert(3);

    assert_eq!(dodgeball_teams(students), Some((first_team, second_team)));
}

#[test]
fn test_dodgeball_teams_2() {
    let students: Vec<Vec<usize>> = vec![
        vec![3],
        vec![2],
        vec![1, 3, 4],
        vec![0, 2, 4, 5],
        vec![2, 3],
        vec![3],
    ];
    assert_eq!(dodgeball_teams(students), None);
}

fn main() {
    let students: Vec<Vec<usize>> = vec![
        vec![3],
        vec![2],
        vec![1, 4],
        vec![0, 4, 5],
        vec![2, 3],
        vec![3],
    ];
    println!("DodgeBall Teams! --> {:?}", dodgeball_teams(students));
}
