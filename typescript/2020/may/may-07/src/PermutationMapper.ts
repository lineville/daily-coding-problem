export const permutationMapper = (
  permutation: Array<number>,
  arr: Array<any>
): Array<any> => {
  if (permutation.length !== arr.length) {
    throw new Error("Permutation length mismatch");
  }

  let result: Array<any> = new Array<any>(arr.length);

  permutation.forEach((p: number, i: number) => {
    result[i] = arr[p];
  });
  return result;
};

console.log(permutationMapper([0, 1, 2, 3, 4], ["a", "b", "c", "d", "e"]))