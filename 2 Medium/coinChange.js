/*
You are given an integer array coins representing coins of different denominations and
an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

Example 4:

Input: coins = [1], amount = 1
Output: 1

Example 5:

Input: coins = [1], amount = 2
Output: 2

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
*/

/*
**dynamic programming**
bottom-up approach
create dp: new array with indexes = 1 more than amount
set dp[0] = 0
will be storing minimum coin combinations to reach desired amount
 if combinations not possible, amount at that index will be 1 more than desired amount (will use later to return -1)
double loop
 first start at index i = 1; i <= amount
  second start at index j = 0; j < length of coins array
   check if index of coins array (each coin) <= current index, i
   if so, update dp at index i --> take Min(current dp[i], dp[i - current coin] + 1)
check if last index is greater than amount (meaning could not make coins for it), return -1
 else, return value
*/

const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};


/*

[1, 2, 5], 11
5 = 11 --> no, move up
5 + 5 = 11 --> no, move up
5 + 5 + 5 = 11 --> no, move down
5 + 5 + 2 = 11 --> no, move down
5 + 5 + 1 = 11 --> yes

[2, 5], 11
5 = 11 --> no, move up
5 + 5 = 11 --> no, move up
5 + 5 + 5 = 11 --> no, move down
5 + 5 + 2 = 11 --> no --> not possible

*/