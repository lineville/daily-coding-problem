// * Daily Coding Problem October 9th 2020

// * [Medium] -- Spotify

// * You have access to ranked lists of songs for various users.
// * Each song is represented as an integer, and more preferred songs appear earlier in each list.
// * For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

// * Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

// ! Ex: {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}. In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].

fn create_playlist(ranked_songs: &Vec<Vec<u32>>) -> Vec<u32> {
    let mut playlist = Vec::new();

    while !used_all_songs(ranked_songs) {
        let potential_next_songs: Vec<u32> = ranked_songs.iter().map(|songs| songs[0]).collect();
        // let next_song = decide which of the next songs to take. We want to chose the one that
        // does not appear in someone else's list later on. So for example we would chose 2 first,
        // since 1 appears in person 2's list and 3 occurs in person 1's list.

        // * Once we've chose which song to select next push that on the result, pop it off of any list
        // * that had that song as the next song up in their list. The song has been moved off of the person(s)
        // * personal list and into the merged one and the while case is closer to becoming true.
    }

    return playlist;
}

fn used_all_songs(ranked_songs: &Vec<Vec<u32>>) -> bool {
    ranked_songs.iter().all(|songs| songs.len() == 0)
}

fn main() {
    println!("Spotify playlist algorithm!");

    let ranked_songs = vec![vec![1, 7, 3], vec![2, 1, 6, 7, 9], vec![3, 9, 5]];
    let playlist = create_playlist(&ranked_songs);
    println!("{:?}", ranked_songs);
    println!("Merged playlist: {:?}", playlist);
}

// _____________________________TESTS___________________________

#[test]
fn test_create_playlist_1() {
    let ranked_songs = vec![vec![1, 7, 3], vec![2, 1, 6, 7, 9], vec![3, 9, 5]];
    assert_eq!(create_playlist(&ranked_songs), vec![2, 1, 6, 7, 3, 9, 5]);
}

#[test]
fn test_used_all_songs_1() {
    let ranked_songs = vec![vec![1, 7, 3], vec![2, 1, 6, 7, 9], vec![3, 9, 5]];
    assert_eq!(used_all_songs(&ranked_songs), false);
}

#[test]
fn test_used_all_songs_2() {
    let ranked_songs = vec![vec![], vec![], vec![]];
    assert_eq!(used_all_songs(&ranked_songs), true);
}
