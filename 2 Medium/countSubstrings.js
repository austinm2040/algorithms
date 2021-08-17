/*
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/

/*
create helper function to determine if string is palindrome
create obj to track number of unique palindromes
track total number
double loop through string
 at first loop, create substring variable
  at each index in second loop, add character to substring and check if it is in object
   if so, increase count
   if not, check if palindrome with helper - if so, add to object with value 1
loop through obj, count & return total number of palindromes
*/

const countSubstrings = (s) => {
  let palindromes = {};
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let substring = '';
    for (let j = i; j < s.length; j++) {
      substring+= s[j];
      if (palindromes[substring] !== undefined) {
        palindromes[substring]++;
      } else if (isPalindrome(substring)) {
        palindromes[substring] = 1;
      }
    }
  }
  for (let key in palindromes) {
    total+= palindromes[key]
  }
  return total;
};

const isPalindrome = (s) => {
  let reverse = s.split('').reverse().join('');
  return s === reverse;
};