/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.

*/

/*
edge case: if s.length % 2 = 1, return false
create array stack to track chars
loop through string and check if char is open/closed
 if open, push to stack
 if closed and top element is same char and open & stack has length, pop stack
 otherwise, input string not valid -> return false
return true if stack length is 0
*/

const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (
        (s[i] === ')' && top === '(' && stack.length) ||
        (s[i] === ']' && top === '[' && stack.length) ||
        (s[i] === '}' && top === '{' && stack.length)
      ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;

};