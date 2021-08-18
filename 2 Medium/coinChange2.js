/*
You are given an integer array coins representing coins of different denominations
and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount.
If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:

Input: amount = 10, coins = [10]
Output: 1

Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000
*/

/*
**dynamic programming**
bottom-up
create an array, dp with index = amount + 1
use an for-of loop --> check each coin within coins array
 for loop from i = coin value; i <= amount
  increase dp[i] to dp[i - coin value]
return dp[amount]
*/

const change = (coins, amount) => {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i < amount + 1; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};

/*
coins = [1,2,5]
amount = 5

dp process:
initial: [1,0,0,0,0,0]
coin value = 1: [1,1,1,1,1,1] --> get to 5 using only 1's
coin value = 2: [1,1,2,2,3,3] --> get to 5 using 1's & 2's
coin value = 5: [1,1,2,2,3,4] --> get to 5 using 1's, 2's & 5's

dp[amount] = 4
*/