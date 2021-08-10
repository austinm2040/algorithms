/*

You are given a string s and an integer k.
You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

Constraints:

1 <= s.length <= 10^5
s consists of only uppercase English letters.
0 <= k <= s.length

*/

/*
create object to track chars
create left pointer, current Max, overall Max
loop through s, starting at right pointer
 let each index = char = s[right]
  add this index to chars obj
  Update character frequency:
  take Max of max consecutive chars, value of obj at current char
Shrink the window of characters we are looking at until we can have a window of all the same characters + k charcters to change:
 while right - left + 1 - max consecutive chars > k
  subtract 1 value from chars obj at left index of s
  increase left pointer by 1
Update the output if the current window is greater than our previous max window:
 take Max of overall Max and (right - left + 1)
return overall Max
*/

const characterReplacement = (s, k) => {
  const chars = {};
  let left = 0;
  let currentMax = 0;
  let overallMax = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    chars[char] = 1 + (chars[char] || 0);
    currentMax = Math.max(currentMax, chars[char]);
    while ((right - left + 1) - currentMax > k) {
      chars[s[left]]--;
      left++;
    }

    overallMax = Math.max(overallMax, right - left + 1);
  }
  return overallMax;
};