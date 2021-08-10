/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

*/

/*
each new array must contain unique set of letters
create hash obj to store unique sets of letters
loop through array of strings
 define letters as a sorted array of the string's characters
 if hash[letters] exists, push current string
 else add to has obj
return has obj values
*/

const groupAnagrams = (strs) => {
  let hash = {};
  strs.forEach(str => {
    let letters = str.split('').sort();
    hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
  })
  return Object.values(hash);
};