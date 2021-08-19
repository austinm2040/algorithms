/*
Given two strings text1 and text2, return the length of their longest common subsequence.
If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none)
deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/

/*
**dynamic programming**
bottom-up approach
Sub-problem to solve: what is the max subsequence of text string I can make, given each additional character?
Create a grid of 0's with text2.length + 1 columns and text1.length + 1 rows
 dp = new Array with text 1 length + 1 (fill with 0)
  map over this array and create a new Array at each index with length = text2.length + 1, fill with 0
Double for loop
 Start with index i (col) = 1
  index j (row) = 1
   check if corresponding characters for each cell are the same
   if so,
    add 1 from previous row/col --> dp[i - 1][j - 1]
   else,
    update cell to be Max of same col & previous row, or previous col & same row
     (dp[i][j - 1], dp[i - 1][j])
Return final cell --> dp[text1.length][text2.length]
*/

const longestCommonSubsequence = (text1, text2) => {
  const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[text1.length][text2.length]
};

/*
text1 = "abcde"
text2 = "ace"

dp process:

[
  initial: [ 0, 0, 0, 0 ],
  [ 0, 1, 1, 1 ],
  [ 0, 1, 1, 1 ],
  [ 0, 1, 2, 2 ],
  [ 0, 1, 2, 2 ],
  [ 0, 1, 2, 3 ]
]

dp[text1.length][text2.length] = 3
*/