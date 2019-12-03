// Daily Coding Problem Nov 12 2019

/**
 * * Run-length encoding is a fast and simple method of encoding strings.
 * * The basic idea is to represent repeated successive characters as a single count and character.
 * * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 */

const runLengthEncoding = (input: string): string => {
  if (input.length == 0) {
    // ! Error handling
    throw new Error("Cannot encode empty string");
  }

  let result: string = "";
  let currentRun: number = 1;

  // * For each letter in the input string
  for (let i = 0; i < input.length; i++) {
    let currentChar: string = input[i];

    // * Compare with next character if we are not at the last letter
    if (i < input.length - 1 && input[i + 1] === currentChar) {
      currentRun++;
    } else {
      // * Run has finished
      result += currentRun.toString() + currentChar;
      currentRun = 1;
    }
  }

  return result;
};

const testRunLengthEncoding = (): void => {
  const input1: string = "AAAABBBCCDAA";
  const expectedOutput1: string = "4A3B2C1D2A";
  const result1: string = runLengthEncoding(input1);

  console.log(expectedOutput1 == result1 ? "Passed ✔️" : "Failed ❌ ");
};

testRunLengthEncoding();
