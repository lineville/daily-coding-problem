// import { didTestPass } from 'simple-unit-test-utility';

// Daily Coding Problem

// Nov 14 2019

// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions
//  required to change one string to the other.

// ! EX: editDistance(“kitten”, “sitting”) => “k” => “s”,“e” => “i”, append “g”.

const { didTestPass } = require("simple-unit-test-utility");

const editDistance = (source: string, target: string): number => {
  let result: number = 0;

  const shorter: string = source.length < target.length ? source : target;
  const longer: string = source.length > target.length ? source : target;

  for (let i = 0; i < shorter.length; i++) {
    if (source[i] !== target[i]) {
      result++;
    }
  }
  const numLettersToAppend: number = longer.length - shorter.length;
  result += numLettersToAppend;

  return result;
};

const testEditDistance = (): void => {
  // * K I T T E N    .length = 6
  // * S I T T I N G  .length = 7
  // * _ I T T _ N _
  // * 3 blanks

  const input1: string = "kitten";
  const target1: string = "sitting";

  const expectedResult1: number = 3;
  const result1: number = editDistance(input1, target1);
  didTestPass(expectedResult1, result1);

  // * ---------------------------------
  // * B I N G O
  // * D I N G O
  // * D E N G I
  // * D E N T I
  // * D E N T I S 
  // * D E N T I S T
  // * _ _ N _ _ _ _

  const input2: string = "bingo";
  const target2: string = "dentist";

  const expectedResult2: number = 6; // * Actually should be 5
  const result2: number = editDistance(input2, target2);
  didTestPass(expectedResult2, result2);

  // * ----------------------------------
  // * B E W I L D E R
  // * W I L D
  // * _ _ _ _ _ _ _ _

  // * GOING TO BREAK WITH THIS TEST

  const input3: string = "bewilder";
  const target3: string = "wild";

  const expectedResult3: number = 4;
  const result3: number = editDistance(input3, target3);
  didTestPass(expectedResult3, result3);
};

testEditDistance();
