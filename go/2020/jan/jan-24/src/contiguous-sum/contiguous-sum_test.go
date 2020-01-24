package contiguousSum
import "testing"

func TestContiguousSum1(t *testing.T) {
	got := ContiguousSum([]int{1, 2, 3, 4, 5}, 9);
	if arrayEqual(got, []int{2,3,4}) == false {
		t.Error("Expected [2,3,4], got ", got)
	}
}

func TestContiguousSum2(t *testing.T) {
	got := ContiguousSum([]int{1, 2, 3, 4, 5}, 12);
	if arrayEqual(got, []int{3,4,5}) == false {
		t.Error("Expected [3,4,5], got ", got)
	}
}

func TestContiguousSum3(t *testing.T) {
	got := ContiguousSum([]int{1, 2, 3, 4, 5}, 13);
	if got != nil {
		t.Error("Expected nil, got ", got)
	}
}
