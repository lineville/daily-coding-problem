//  * Daily Coding Problem May 10 2020

// * [Hard] -- YouTube

// * Write a program that computes the length of the longest common subsequence of three given strings.
// ! Ex: "epidemiologist", "refrigeration", "supercalifragilisticexpialodocious" => 5 (eieio)

export const longestCommonSubsequence = (words : Array<string>, first: number, second: number, third: number) : number => {
     
  if (first == -1 || second == -1 || third == -1) {
    return 0
  }

  let dp = new Array<Array<Array<number>>(100);
  
  
  // if (i == -1 || j == -1 || k == -1) return 0
  //    if (dp[i][j][k] != -1) return dp[i][j][k]

  //    if (X[i] == Y[j] && Y[j] == Z[k])
  //      return (dp[i][j][k] = 1 + lcsOf3(i - 1, j - 1, k - 1))
  //    else
  //      return (dp[i][j][k] = max(
  //        max(lcsOf3(i - 1, j, k), lcsOf3(i, j - 1, k)),
  //        lcsOf3(i, j, k - 1)
  //      )) 
}

export const longestCommonSubsequenceHelper = (words: Array<string>, indexes: Array<number>) : number => {
  return longestCommonSubsequence(words, 0, 0, 0);
}
