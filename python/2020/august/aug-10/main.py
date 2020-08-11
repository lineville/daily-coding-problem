
# * Daily Coding Problem August 10 2020

# * [Easy] -- Uber

# * On election day, a voting machine writes data in the form
# * (voter_id, candidate_id) to a text file. Write a program that
# * reads this file as a stream and returns the top 3 candidates at
# * any given time. If you find a voter voting more than once, report this as fraud.

import pytest


# * Processes the votes from the file path up to n votes,
# * if n is not provided all votes are processed
def processVotes(filePath, n=None):
    file = open(filePath, "r")
    counts = {}
    voters = {}
    totalVotes = 0

    for line in file:
        # * Parse out the voter_id and candidate_id from line of text
        voter, candidate = line[1:len(line) - 2].split(", ")

        # * Check for fraud
        if voter in voters:
            print(
                f"Election Fraud! It appears that voter #{voter} has already cast their ballot")
            raise SystemExit(1)

        # * Register the vote and print out current state
        voters[voter] = True
        counts[candidate] = counts.setdefault(candidate, 0) + 1
        totalVotes += 1
        printVotes(totalVotes, counts)

        # * If n was provided and we have processed n votes, stop and return the top three
        if n and totalVotes == n:
            return topThreeCandidates(counts)

    # * Close out file and return the top three
    file.close()
    return topThreeCandidates(counts)


# * Returns the top three current candidates
def topThreeCandidates(candidates):
    result = []
    maxCandidates = 3
    currentCandidate = 0

    sorted_by_votes = {k: v for k, v in sorted(
        candidates.items(), key=lambda item: item[1], reverse=True)}

    for candidate, votes in sorted_by_votes.items():
        if currentCandidate >= maxCandidates:
            break
        currentCandidate += 1
        result.append(candidate)
    return result


# * Prints current voting state
def printVotes(totalVotes, counts):
    print(f"Votes: {totalVotes}\nTop 3 in order are: \n")
    topThree = topThreeCandidates(counts)
    for i, candidate in enumerate(topThree):
        print(
            f"{i + 1}: Candidate #{candidate} -- ({counts[candidate]}) votes")
    print("\n--------------------\n")


# * _______________________________TESTS___________________________


def test_process_votes_after_5_votes():
    assert processVotes("votes.txt", 5) == ['1', '2', '3']


def test_process_votes_after_3_votes():
    assert processVotes("votes.txt", 3) == ['1']


def test_process_votes_after_all_votes():
    assert processVotes("votes.txt") == ['1', '2', '3']


def test_process_votes_fraud(capsys):
    with pytest.raises(SystemExit) as exc:
        processVotes("votes_fraud.txt")
    assert exc.value.code == 1


# * ___________________ MAIN _______________________________

def main():
    print("Election day and the votes are ...\n-----------------------------------\n")
    processVotes("votes.txt")


main()
