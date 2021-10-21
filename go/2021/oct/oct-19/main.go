// * Daily Coding Problem October 19 2021

// * [Medium] -- Spotify

// You have access to ranked lists of songs for various users.
// Each song is represented as an integer, and more preferred songs appear earlier in each list.
// For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

// Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

// For example, suppose your input is {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}.
// In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].

package main

import "fmt"

func interleaveSongs(playlists [][]int) []int {
	playlist := make(map[int]bool)
	songMapping := createSongMapping(playlists)
	indexes := make([]int, len(playlists))

	for !isEveryoneCovered(playlists, indexes) {
		nextSongToChose := getNextSong(playlists, songMapping, indexes)
		playlist[nextSongToChose] = true
	}

	return getKeys(playlist)
}

// Creates a mapping of songs to a map of their playlist and indexes
func createSongMapping(playlists [][]int) map[int]map[int]int {
	songMapping := make(map[int]map[int]int)
	for i, playlist := range playlists {
		for j, song := range playlist {
			if _, ok := songMapping[song]; !ok {
				songMapping[song] = make(map[int]int)
			}
			songMapping[song][i] = j
		}
	}

	return songMapping
}

// Returns the keys from a map as a slice
func getKeys(m map[int]bool) []int {
	keys := make([]int, 0)
	for k := range m {
		keys = append(keys, k)
	}
	return keys
}

// Gets the next best song to chose
func getNextSong(playlists [][]int, songMapping map[int]map[int]int, indexes []int) int {
	candidates := getNextTopSongs(playlists, indexes)
	result := -1
	fromPlaylist := -1
	// For each potential candidate song
	for i, candidate := range candidates {
		if _, ok := songMapping[candidate]; ok {
			// For each of the playlists that this song is found in
			// If the candidate song does not occur later on in another playlist chose it
			existsElseWhere := false
			for _, j := range songMapping[candidate] {
				if j > indexes[i] {
					existsElseWhere = true
				}
			}

			if !existsElseWhere {
				result = candidate
				fromPlaylist = i
			}
		}
	}
	// Todo increase the indexes of the other playlists if this song is a double whammy
	indexes[fromPlaylist]++

	return result
}

func getNextTopSongs(playlists [][]int, indexes []int) []int {
	topSongs := make([]int, 0)
	for i, playlist := range playlists {
		if len(playlist) == 0 {
			continue
		}
		topSongs = append(topSongs, playlist[indexes[i]])
	}

	return topSongs
}

// Checks if all playlists are empty
func isEveryoneCovered(playlists [][]int, indexes []int) bool {
	for i, playlist := range playlists {
		if indexes[i] < len(playlist)-1 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(interleaveSongs([][]int{{1, 7, 3}, {2, 1, 6, 7, 9}, {3, 9, 5}}))
}
