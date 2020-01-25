package goldbachnumber
import "testing"

func TestGoldbachNumberSmallestSolution1(t *testing.T) {
	got, _ := GoldbachNumberSmallestSolution(4);
	if arrayEqual(got, []int{2,2}) == false {
		t.Error("Expected [2,2], got ", got)
	}
}

func TestGoldbachNumberSmallestSolution2(t *testing.T) {
	got, _ := GoldbachNumberSmallestSolution(8);
	if arrayEqual(got, []int{1,7}) == false {
		t.Error("Expected [1,7], got ", got)
	}
}

func TestGoldbachNumberSmallestSolution3(t *testing.T) {
	got, _ := GoldbachNumberSmallestSolution(16);
	if arrayEqual(got, []int{3,13}) == false {
		t.Error("Expected [3,13], got ", got)
	}
}

func TestGoldbachNumberSmallestSolution4(t *testing.T) {
	got, err := GoldbachNumberSmallestSolution(2);
	if arrayEqual(got, []int{}) == false && err != nil {
		t.Error("Expected [], got ", got)
	}
}