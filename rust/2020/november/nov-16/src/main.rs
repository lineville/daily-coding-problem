// * Daily Coding Problem

// * [Medium] -- Microsoft

// * Given a list of jobs to be done, where each job is represented by a start time and end time.
// * Two jobs are compatible if they don't overlap. Find the largest subset of compatible jobs.

// ! Ex: [(0, 6),
// !      (1, 4),
// !      (3, 5),
// !      (3, 8),
// !      (4, 7),
// !      (5, 9),
// !      (6, 10),
// !      (8, 11)]
// * Should return [(1, 4), (4, 7), (8, 11)]

fn largest_compatible_subset(jobs: &Vec<(u32, u32)>) -> Vec<(u32, u32)> {
    let mut result = Vec::new();

    return result;
}

fn main() {
    println!("Largest subset of non overlapping jobs!\n-----------------------------\n");

    let jobs = vec![
        (0, 6),
        (1, 4),
        (3, 5),
        (3, 8),
        (4, 7),
        (5, 9),
        (6, 10),
        (8, 11),
    ];
    let result = largest_compatible_subset(&jobs);
    println!("Jobs: {:?}\nCompatible Subset: {:?}", jobs, result);
}

// * ___________________________TESTS_________________________________

#[test]
fn test_largest_compatible_subset_1() {
    let jobs = vec![
        (0, 6),
        (1, 4),
        (3, 5),
        (3, 8),
        (4, 7),
        (5, 9),
        (6, 10),
        (8, 11),
    ];
    assert_eq!(
        largest_compatible_subset(&jobs),
        vec![(1, 4), (4, 7), (8, 11)]
    );
}
