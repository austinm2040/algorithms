/*

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

Constraints:

0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.

*/

/*
edge case: string length 0 or 1 --> return length
**Sliding window**
create chars Obj to keep track of characters
keep track of left, right
create variable for result - longest substring
while right value < length of string:
 define a characterRight to be the character at current index of 'right'
 check if characterRight is in chars Obj
 if so, set = 1 -> else, add 1
 while a duplicate has been found:
 while chars Obj at characterRight > 1
  define characterLeft to be character at current index of 'left'
  subtract 1 from chars Obj at characterLeft (duplicate character, to set back to 1)
  increase left value by 1
take max of current longest substring and (right - left + 1)
add 1 to right value
*/

const lengthOfLongestSubstring = (s) => {
  let chars = {};
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < s.length) {
    let charRight = s.charAt(right);
    if (chars[charRight] === undefined) {
      chars[charRight] = 1;
    } else {
      chars[charRight]++;
    }

    while (chars[charRight] > 1) {
      let charLeft = s.charAt(left);
      chars[charLeft]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
    right++;
  }
  return result;
};