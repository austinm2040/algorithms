/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:

-2^31 <= x <= 2^31 - 1
*/

/*
Create boolean to track if x is negative, if so --> turn positive
Set reversed variable = 0
While loop --> while x > 0
  Each iteration --> work backward
  Divide x by 10
  Move decimal of currently reversed integer to right by 1 (multiply by 10, add x/10)
  Move decimal of x to left by 1, round down
Check constraint if x > 2^31 or x < 2^-31 --> return 0
Return reversed integer --> use negative boolean to return negative if needed
*/

const reverse = (x) => {
  const isNegative = x < 0 ? true : false;
  if (isNegative){
    x = x * -1;
  }

  let reversed = 0;
  while (x > 0) {
    reversed = (x % 10) + (reversed * 10);
    x = parseInt(x / 10);
  }
  if (reversed > 2**31) { // constraint
    return 0;
  }

  return isNegative ? reversed * -1 : reversed;
};
