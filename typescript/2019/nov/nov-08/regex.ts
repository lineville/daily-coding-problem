// Daily Coding Problem Nov 8 2019

// Implement regular expression matching with the following special characters:

// * . (period) which matches any single character
// * * (asterisk) which matches zero or more of the preceding element
// * That is, implement a function that takes in a string and a valid regular expression
// * and returns whether or not the string matches the regular expression.

// * Contract: matches = (regex: string, input: string) => boolean
// ! Ex: matches("ra.", "ray") => true
// ! Ex: matches("ra.", "raymond") => false
// ! Ex: matches(".*at", "chat") => true
// ! Ex: matches(".*at", "combat") => true
// ! Ex: matches(".*at", "chats") => false

const matches = (regex: string, input: string): boolean => {
  let result: boolean = true;
  let inputIndex: number = 0;

  for (let i = 0; i < regex.length; i++) {
    let letter = regex[i];

    if (letter == ".") {
    } else if (letter == "*") {
      if (i == regex.length - 1) {
        return true;
      }
      let letterAfterAsterisk = regex[i + 1];
      while (input[inputIndex] != letterAfterAsterisk) {
        console.log("looping on an *");
        inputIndex++;
      }
      i++;
    } else {
      if (letter != input[inputIndex]) {
        return false;
      }
    }
    inputIndex++;
  }
  return result && inputIndex === input.length;
};

const testRegexMatcher = (): void => {
  const regex1: string = "ra.";
  const regex2: string = ".*at";
  const regex3: string = "*";
  const regex4: string = ".*a*.a";

  const input1: string = "ray";
  const input2: string = "raymond";
  const input3: string = "chat";
  const input4: string = "chats";
  const input5: string = "combat";
  const input6: string =
    "aksjdfuaweusifhawoisfnalsdkfnalksfjaskljfajdfoawhbefuioawbfoianf";
  const input7: string = "bf892asfjsopidjfsdflkea";
  const input8: string = "bf892asfjsopidjfsdflkeaasdf";

  const expectedResult1: boolean = true;
  const expectedResult2: boolean = false;
  const expectedResult3: boolean = true;
  const expectedResult4: boolean = false;
  const expectedResult5: boolean = true;
  const expectedResult6: boolean = true;
  const expectedResult7: boolean = true;
  const expectedResult8: boolean = false;

  const result1: boolean = matches(regex1, input1);
  const result2: boolean = matches(regex1, input2);
  const result3: boolean = matches(regex2, input3);
  const result4: boolean = matches(regex2, input4);
  const result5: boolean = matches(regex2, input5);
  const result6: boolean = matches(regex3, input6);
//   const result7: boolean = matches(regex4, input7);
//   const result8: boolean = matches(regex4, input8);

  console.log(result1 === expectedResult1 ? "Passed ✔️" : "Failed ❌");
  console.log(result2 === expectedResult2 ? "Passed ✔️" : "Failed ❌");
  console.log(result3 === expectedResult3 ? "Passed ✔️" : "Failed ❌");
  console.log(result4 === expectedResult4 ? "Passed ✔️" : "Failed ❌");
  console.log(result5 === expectedResult5 ? "Passed ✔️" : "Failed ❌");
  console.log(result6 === expectedResult6 ? "Passed ✔️" : "Failed ❌");
//   console.log(result7 === expectedResult7 ? "Passed ✔️" : "Failed ❌");
//   console.log(result8 === expectedResult8 ? "Passed ✔️" : "Failed ❌");
};

testRegexMatcher();
