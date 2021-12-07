// * Daily Coding Problem Dec 7th 2021

// * [Medium] -- Spotify

// You have access to ranked lists of songs for various users.
// Each song is represented as an integer, and more preferred songs appear earlier in each list.
// For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

// Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

// For example, suppose your input is {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}.
// In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].

package main

import "fmt"

// Interleaves the set of ranked songs to a flattened list that satisfies everyone's priorities.
func interleavePlaylists(playlists [][]int) []int {
	result := []int{}

	// queue := make(PriorityQueue, 0)

	// for _, playlist := range playlists {
	// 	offset := 0
	// 	for priority, song := range playlist {
	// 		if queue.Exists(song) {
	// 			// An Item is something we manage in a priority queue.
	// 			song_item := Item{value: song, priority: priority + offset}
	// 			queue.Push(song_item)
	// 		} else {
	// 			old_priority := queue.GetPriority(song)
	// 			offset += Math.Max(old_priority, priority)
	// 			queue.Update(song, priority+offset)
	// 		}
	// 	}
	// }

	// # priority queue updation
	// # updating the queue is necessary to ensure if a song (occuring 2nd time in a
	// # different playlists) gets push down the queue, all the songs in the playlist
	// # (where the song appeared 1st) also get pushed down
	// for playlist in playlists:
	//     offset = 0
	//     for priority, song in enumerate(playlist):
	//         old_priority = queue.get_priority(song)
	//         if old_priority > priority:
	//             offset = max(offset, old_priority - priority)
	//         queue.update_key(song, priority + offset)

	// while not queue.is_empty():
	//     result.append(queue.extract_min())
	// return result

	return result
}

func main() {
	pl1 := []int{1, 7, 3}
	pl2 := []int{2, 1, 6, 7, 9}
	pl3 := []int{3, 9, 5}
	result := interleavePlaylists([][]int{pl1, pl2, pl3})

	fmt.Printf("Playlist 1: %v\n", pl1)
	fmt.Printf("Playlist 2: %v\n", pl2)
	fmt.Printf("Playlist 3: %v\n", pl3)
	fmt.Println(result)

}
