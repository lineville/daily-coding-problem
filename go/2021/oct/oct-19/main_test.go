package main

import (
	"reflect"
	"testing"
)

func TestInterleaveSongs(t *testing.T) {
	songs := [][]int{{1, 7, 3}, {2, 1, 6, 7, 9}, {3, 9, 5}}
	expected := []int{2, 1, 6, 7, 3, 9, 5}
	result := interleaveSongs(songs)

	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Failed test! Expected %#v, got %#v", expected, result)
	}

}
