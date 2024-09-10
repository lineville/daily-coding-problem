
// On election day, a voting machine writes data in the form (voter_id, candidate_id) to a text file.
// Write a program that reads this file as a stream and returns the top 3 candidates at any given time.
// If you find a voter voting more than once, report this as fraud.

// Votes.txt
// (1, harris)
// (2, trump)
// (3, harris)
// etc...

use std::io::BufRead;

// Reads a text file as a stream and returns the top 3 candidates at any given time.
fn top_three_candidates() -> Vec<String> {
    let mut candidates = vec![];
    let mut candidate_votes = std::collections::HashMap::new();
    let mut voter_votes = std::collections::HashMap::new();
    let mut fraud_voters = vec![];

    let file = std::fs::File::open("voter-data/election-results-2024.txt").expect("Unable to open file");
    let reader = std::io::BufReader::new(file);

    for line in reader.lines() {
        let line = line.expect("Unable to read line");
        let line = line.trim();
        let line = line.trim_start_matches("(");
        let line = line.trim_end_matches(")");
        let line = line.trim();
        let line = line.split(", ");
        let mut line = line.map(|s| s.to_string());

        let voter_id = line.next().expect("Unable to read voter id");
        let candidate_id = line.next().expect("Unable to read candidate id");

        if voter_votes.contains_key(&voter_id) {
            fraud_voters.push(voter_id);
        } else {
            voter_votes.insert(voter_id, candidate_id.clone());
        }

        let count = candidate_votes.entry(candidate_id).or_insert(0);
        *count += 1;

        let mut candidate_votes = candidate_votes.iter().collect::<Vec<_>>();
        candidate_votes.sort_by(|a, b| b.1.cmp(a.1));

        candidates = candidate_votes
            .iter()
            .map(|(candidate, _)| candidate.to_string())
            .collect::<Vec<_>>();
    }

    if !fraud_voters.is_empty() {
        println!("Fraudulent voters: {:?}", fraud_voters);
    }

    candidates.truncate(3);
    candidates
}

fn main() {
    let candidates = top_three_candidates();
    println!("Top 3 candidates: {:?}", candidates);
}
