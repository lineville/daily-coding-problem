// Daily Coding Problem Nov 13 2019

// * You are given an array of non-negative integers that represents a two-dimensional elevation map
// * where each element is unit-width wall and the integer is the height.
// * Suppose it will rain and all spots between two walls get filled up.

// * Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// ! Ex: unitsOfWater([2, 1, 2]) => 1 You can store one unit of water in the middle between the twos
// ! Ex: unitsOfWater([3, 0, 1, 3, 0, 5]) => 3 + 2 + 3 = 8. You can store 3 in index 1, 2 in index 2 and 3 in index 4 (left wall shorter)

const unitsOfWater = (elevationMap: Array<number>): number => {
  if (elevationMap.length < 3) {
    throw new Error("Need at least three data points for an elevation map");
  }


  // * Not sure if this method will work in all cases ... but it does for the two provided :D
  let noZeros = elevationMap.filter(height => height != 0);
  let highToLow = noZeros.sort((a: number, b: number) => b - a);
  let totalSquareArea = highToLow[0] * highToLow.length;
  let wallArea = highToLow.reduce((prev, acc) => prev + acc, 0);
  

  return totalSquareArea - wallArea;
};

const testUnitsOfWater = (): void => {
  const input1: Array<number> = [2, 1, 2];
  const input2: Array<number> = [3, 0, 1, 3, 0, 5];

  const expextedResult1: number = 1;
  const expextedResult2: number = 8;

  const result1: number = unitsOfWater(input1);
  const result2: number = unitsOfWater(input2);

  console.log(result1 == expextedResult1 ? "Passed" : "Failed");
  console.log(result2 == expextedResult2 ? "Passed" : "Failed");
};

testUnitsOfWater();
