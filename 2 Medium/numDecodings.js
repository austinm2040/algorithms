/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped
then mapped back into letters using the reverse of the mapping above (there may be multiple ways).
For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.

Example 4:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
*/

/*
**dynamic programming**
Create new array, dp with length = s.length + 1
set last index to 1 as a starting point to add 1 or 2
first check if final index of string is 0
 if so, set dp at second to last index = 0
 othewise, set = 1 --> ternary
For loop:
 start at end of string - 2, work backward
 check if char === 0
  if so, dp[index] = 0
  else check if
   current 2 chars <= 26 (needs to be <= 26 since already checking 0)
   if so, dp[index] = dp[index + 1] + dp[index + 2]
  else
   dp[index] = dp[index + 1]
return dp[0]
*/

const numDecodings = (s) => {
  const len = s.length;
  const dp = new Array(len + 1).fill(0);
  dp[len] = 1;
  dp[len - 1] = s[len - 1] === '0' ? 0 : 1;

  for (let i = len - 2; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0;
    } else if (parseInt(s.slice(i, i + 2)) <= 26) {
      dp[i] = dp[i + 1] + dp[i + 2];
    } else {
      dp[i] = dp[i + 1];
    }
  }
  return dp[0];
};

/*
Example s = "226"

start: [0,0,0,1]
looking at "6": [0,0,1,1] --> 1 solution, (6)
looking at "26": [0,2,1,1] --> 2 solutions, (2,6), (26)
looking at "226": [3,2,1,1] --> 3 solutions, (2,2,6), (2,26), (22,6)

Total solutions = 3
*/