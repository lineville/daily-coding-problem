package main

import (
	"reflect"
	"testing"
)

func TestInterleaveSongs(t *testing.T) {
	playlists := [][]int{
		{1, 7, 3},
		{2, 1, 6, 7, 9},
		{3, 9, 5},
	}

	expected := []int{2, 1, 6, 7, 3, 9, 5}
	actual := interleavePlaylists(playlists)
	if !reflect.DeepEqual(actual, expected) {
		t.Errorf("Expected %v, but got %v", expected, actual)
	}

}
