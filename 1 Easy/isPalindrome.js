/*

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.

*/

/*
replace string so that there are only letters and numbers --> regex
set a midpoint
loop through string up to midpoint
 check if each side of string is equal
 if not, return false
*/

const isPalindrome = (s) => {
  let trimmed = s.replace(/[^a-z0-9]/gi, '');
  let end = trimmed.length;
  let mid = Math.floor(end / 2);
  for (let i = 0; i < mid; i++) {
    if (trimmed[i].toLowerCase() !== trimmed[end - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
};