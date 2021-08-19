/*
We are given an array of values values and an array of weights weights:
values[i] corresponds to the value of the i'th item
weights[i] corresponds to the weight of the i'th item

Given these two lists and an integer maxWeight, find a subset of the items in this "knapsack"
that has maximal overall value, yet stays <= maxWeight in total weight.

Example 1:
Input:
values = [60, 50, 70, 30]
weights = [5, 3, 4, 2]
maxWeight = 8

Output: 120
Explanation: We take items 1 and 2 (zero-indexed) for a total value of 120 and a total weight of 7.

Example 2:
Input:
values = [60, 100, 120, 80, 30]
weights = [10, 20, 30, 40, 50]
maxWeight = 400

Output: 390
Explanation: We take all items for a total value of 390 and a total weight of 150, still below 400.

Constraints:
You can not split an item
Once you select an item you can not select it again
*/

/*
0/1 --> each subproblem is a choice to include or exclude previous subproblem's answer (taking Max)
Create new array with length = values.length + 1
loop through array and create new array with length = maxWeight + 1 at each index
New double loop
 First index i = 1; i <= values.length
 At each index, consider one more weight than previous index of weights array
  Second loop j = 0; j <= maxWeight
  At each index, choose whether to consider or not consider previous weight
  If we choose item, it subtracts from weight and we go up one index of dp array and where max value is stored
  If we don't choose item, it does not subtract and we create new max at that index
   check if value of weight at previous index of i > j
    if so,
     dp[i][j] holds the max value of knapsack --> dp[i][j] = dp[i - 1][j]
    else
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1])
return max value --> last value of last array in dp
*/

const knapSack = (values, weights, maxWeight) => {
  let dp = new Array(values.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(maxWeight + 1).fill(0);
  }
  for (let i = 1; i <= values.length; i++) {
    for (let j = 0; j <= maxWeight; j++) {
      if (weights[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
      }
    }
  }
  return dp[values.length][maxWeight];
};

/*
values = [60, 50, 70, 30]
weights = [5, 3, 4, 2]
maxWeight = 5

dp process:
[
  initial: [0,0,0,0,0,0]
  weight = 5: [0,0,0,0,0,60] --> get to 5 using only 5
  weight = 3: [0,0,0,50,50,60] --> get to 5 using 5 & 3
  weight = 4: [0,0,0,50,70,60] --> get to 5 using 5, 3 & 4
  weight = 2: [0,0,30,50,70,80] --> get to 5 using 5, 3, 4 & 2
]

dp[values.length][maxWeight] = 80
*/