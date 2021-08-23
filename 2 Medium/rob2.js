/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
That means the first house is the neighbor of the last one.
Meanwhile, adjacent houses have a security system connected,
and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [1,2,3]
Output: 3

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

*/

/*
**dynamic programming**
Create helper function
 declare 2 variables, rob1, rob2 --> store max from previous 2 houses
 initially set both = 0
 For loop (will be done twice: once from 0 to nums.length - 2; other from 1 to nums.length - 1)
  create tempMax variable and store rob1
  create currentMax variable and store first index of nums array
  update rob1 = max(current Max + rob2, rob1)
  update rob2 = temp
 return rob1

Use helper function to:
 go from first index to second to last index --> max1
 and go from second index to last index --> max2
Return max (max1, max2)
*/

const rob2 = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  const max1 = robHelper(nums, 0, nums.length - 2);
  const max2 = robHelper(nums, 1, nums.length - 1);

  return Math.max(max1, max2);
};

const robHelper = (nums, start, end) => {
  let rob1 = 0;
  let rob2 = 0;

  for (let i = start; i <= end; i++) {
    let temp = rob1;
    let currentMax = nums[i];
    rob1 = Math.max(currentMax + rob2, rob1);
    rob2 = temp;
  }
  return rob1;
};