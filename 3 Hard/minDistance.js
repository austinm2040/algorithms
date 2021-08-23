/*
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/



const minDistance = (word1, word2) => {
  const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));

  for (let i = 0; i <= word2.length; i++) {
    for (let j = 0; j <= word1.length; j++) {
      dp[0][i] = i;
      dp[j][0] = j;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1], // deletion
          dp[i - 1][j], // insertion
          dp[i - 1][j - 1] // substitution
        ) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};