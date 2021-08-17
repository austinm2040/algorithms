/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

/*
If 1 step, 1 solution
 2 steps, 2 solutions
 3 steps, 3 solutions
 4 steps, 5 solutions
**Dynamic programming fibonacci**
Fill an empty array, dp with n 0's
set first 2 indexes = 1, index 2 = 2
loop through numbers of n starting at 3]
 update dp at current index to be sum of previous 2
return last index of dp
*/

const climbStairs = (n) => {
  const dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};