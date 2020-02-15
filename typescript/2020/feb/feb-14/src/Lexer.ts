// * Daily Coding Problem Feb 14th 2020

// * [Hard] -- LinkedIn

// * Given a string, return whether it represents a number. Here are the different kinds of numbers:

// * Valid types of numbers
/**
 * * "10", a positive integer
 * * "-10", a negative integer
 * * "10.1", a positive real number
 * * "-10.1", a negative real number
 * * "1E5", a number in scientific notation
 * * "1E-5", a number in scientific notation
 *
 * ! Not numbers below 1
 * * "a"
 * * "x 1"
 * * "a -2"
 * * "-"
 */

// * Generally, this is similar logic to what a Lexical Analyzer would perform when tokenizing source code.
// * We need a formal grammar to define what is a number exactly (e denotes empty) epsilon

// * Number -> (+ | - | e)  (digit)+ (.digit+ | e) (E(+ | - | e)digit+) | e)
// * In english this is a plus or minus followed by one or more digits.
// * This is followed by nothing or a decimal folowed by any number

// * We can model a DFA of this by creating functions that pass around the string as if each is a node in DFA

export default function isValidNumber(input: string): boolean {

	let isValid : boolean = false;
	if (input.length === 0) {
		return isValid;
	}

	const firstChar : string = input[0];

	switch (firstChar) {
		case '+':
		case '-':
			input = input.slice(1);
			
			
	}




  return isValid;
}
