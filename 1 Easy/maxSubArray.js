/*
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:

1 <= nums.length <= 3 * 10^4
-10^5 <= nums[i] <= 10^5

*/

// track current Max and overall -  initially set to 0
// loop through array - track current index
// take Max of current index + current Max & 0
// update overall Max if greater than current Max
// check if all indexes are greater than 0 - return Max if so
// otherwise, return overall Max

const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];

  let overallMax = 0;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    currentMax = Math.max((currentNum + currentMax), 0)
    overallMax = Math.max(currentMax, overallMax)
  }
  if (Math.max(...nums) < 0) {
    return Math.max(...nums)
  }
  return overallMax;

};