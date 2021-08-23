/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them is that
adjacent houses have security systems connected and it will automatically contact
the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400

*/

/*
create new array, dp with index = nums.length + 1
set second to last index of dp = last index of nums (starting point, working backward)
For loop
 start i = nums.length - 2 (next index to look at working backward); i >=0; i--
  increase dp[i] by Max of
   current index of (dp + 1) &
   current index of (dp + 1) + current index of nums
  This will look at current held max & possible new max without adding adjacent 'house'
return first index of dp
*/

const rob = (nums) => {
  const len = nums.length;
  const dp = new Array(len + 1).fill(0);
  dp[len - 1] = nums[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    dp[i] += Math.max(dp[i + 1], dp[i + 2] + nums[i]);
  }
  return dp[0];
};

// Less efficient run time if going forward
// const rob = (nums) => {
//   const len = nums.length;
//   const dp = new Array(len + 1).fill(0);
//   dp[1] = nums[0];

//   for (let i = 2; i <= len; i++) {
//     dp[i] += Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
//   }
//   return dp[len];
// };