/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.

*/

/*
edge case: string lengths unequal
split each string into array, sort
loop through s, check if equal to t at each index
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let sortS = s.split('').sort();
  let sortT = t.split('').sort();
  for (let i = 0; i < sortS.length; i++) {
    if (sortS[i] !== sortT[i]) {
      return false;
    }
  }
  return true;
};