// * Daily Coding Problem August 10 2020

// * [Easy] -- Uber

// * On election day, a voting machine writes data in the form
// * (voter_id, candidate_id) to a text file. Write a program that
// * reads this file as a stream and returns the top 3 candidates at
// * any given time. If you find a voter voting more than once, report this as fraud.

use std::collections::{HashMap, HashSet};
use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;

// The output is wrapped in a Result to allow matching on errors
// Returns an Iterator to the Reader of the lines of the file.
fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}

fn process_votes(votes_file: &str) {
    let mut rankings: HashMap<String, u32> = HashMap::new();
    let mut voters: HashSet<String> = HashSet::new();

    if let Ok(lines) = read_lines(votes_file) {
        for line in lines {
            if let Ok(mut content) = line {
                // * Stripping off the parens
                content.remove(0);
                content.remove(content.len() - 1);
                let vote: Vec<&str> = content.split(", ").collect();
                // * Check for fraud
                if voters.contains(vote[0]) {
                    panic!("Voter fraud detected!!\n It appears that voter {} has already cast their ballot.", vote[0]);
                } else {
                    voters.insert(String::from(vote[0]));
                }

                // * Cast their vote
                match &rankings.get(vote[1]) {
                    Some(vote_count) => rankings.insert(String::from(vote[1]), *vote_count + 1),
                    None => rankings.insert(String::from(vote[1]), 1),
                };
                println!("{}", content);
            }
        }
        let winner = rankings.iter_mut().max_by(|a, b| a.1.cmp(&b.1)).unwrap();
        println!("{:?}", winner);
        // rankings.remove_entry(winner.0);
        // let runner_up = rankings.iter_mut().max_by(|a, b| a.1.cmp(&b.1)).unwrap();
        // println!("{:?}", runner_up);
        // rankings.remove_entry(runner_up.0);

        // let third_place = rankings.iter_mut().max_by(|a, b| a.1.cmp(&b.1)).unwrap();
        // println!("{:?}", third_place);
        // rankings.remove_entry(third_place.0);
    }
}

fn main() {
    println!("It's Election Day and the votes are in!\n------------------\n");
    process_votes("votes.txt");
}
