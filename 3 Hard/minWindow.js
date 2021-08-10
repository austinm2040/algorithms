/*

Given two strings s and t of lengths m and n respectively,
return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:

m == s.length
n == t.length
1 <= m, n <= 10^5
s and t consist of uppercase and lowercase English letters.

*/

const minWindow = (s, t) => {
  let charTracker = {};
  let m = s.length;
  let n = t.length;
  let count = n;
  let min = Number.MAX_SAFE_INTEGER;
  let head = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < n; i++) {
    if (charTracker[t[i]] === undefined) {
      charTracker[t[i]] = 1;
    } else {
      charTracker[t[i]]++;
    }
  }

  while (right < m) {
    if (charTracker[s[right]] !== undefined) {
      if (charTracker[s[right]] > 0) {
        count--;
      }
      charTracker[s[right]]--;
    }

    right++;

    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        head = left;
      }

      if (charTracker[s[left]] !== undefined) {
        if (charTracker[s[left]] === 0) {
          count++;
        }
        charTracker[s[left]]++;
      }

      left++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? "" : s.substr(head, min);

};