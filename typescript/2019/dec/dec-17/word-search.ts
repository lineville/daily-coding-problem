// * Daily Coding Problem Tue Dec 17 2019

// * [Easy] -- Microsoft

// * Given a 2d matrix of letters and a search word, check if target word
// * exists somewhere in the 2d grid, could be vertical or horizontal (no diagonal)


const wordSearch = (grid : Array<Array<string>>, target : string) : boolean => {
    let result : boolean = false;
    // * Try to find it
    for (let r : number = 0; r < grid.length; r++) {
        for (let c : number = 0; c < grid.length; c++) {
            let currentLetter : string = grid[r][c]
            
        }

    }

    return result
}


const testWordSearch = (): void => {
  const input1: Array<Array<string>> = [
    ["F", "A", "C", "I"],
    ["O", "B", "Q", "P"],
    ["A", "N", "O", "B"],
    ["M", "A", "S", "S"]
  ];

  const target1 : string =  "FOAM";

  const expectedResult1 : boolean = true;

  const result1 : boolean = wordSearch(input1, target1);

  console.log(result1 === expectedResult1 ? "Passed" : "Failed");
};

testWordSearch();
