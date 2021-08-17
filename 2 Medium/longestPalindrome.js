/*
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

Example 3:

Input: s = "a"
Output: "a"

Example 4:

Input: s = "ac"
Output: "a"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/*
create helper function to keep track of palindrome validity: expandAroundCenter
create variablesb maxSubStart, maxSubLength to keep track of palindrome
 where substring starts, length of palindrome
loop through string
 use helper function for odd/even palindrome
 update longest substring by using Math.max based on odd/even palindrome
return substring by using original 2 variables - maxSubStart, maxSubLength
*/

const longestPalindrome = (s) => {
  let maxSubStart = 0;
  let maxSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const lengthCenteredAtChar = expandAroundCenter(s, i, i);
    const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
    const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
    if (longestSubAtChar > maxSubLength) {
      maxSubLength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};