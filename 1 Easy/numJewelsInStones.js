/*
You're given strings jewels representing the types of stones that are jewels,
and stones representing the stones you have. Each character in stones is a type of stone you have.
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

/*
Create an object to track unique stones
Create a count variable to track number of stones that are jewels
For loop (stones)
 if obj does not have stone at that particular index, set = 1
For loop (jewels)
 if obj has jewel, increase count by 1
Return count
*/

const numJewelsInStones = (jewels, stones) => {
  let obj = {};
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (obj[stones[i]] === undefined) {
      obj[stones[i]] = 1;
    }
    for (let j = 0; j < jewels.length; j++) {
      if (obj[jewels[j]] !== undefined) {
        count++;
      }
    }
  }
  return count;
};