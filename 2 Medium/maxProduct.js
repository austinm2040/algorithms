/*

Given an integer array nums, find a contiguous non-empty subarray within the array
that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Constraints:

1 <= nums.length <= 2 * 10^4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

/*
edge cases: nums.length = 1 --> return only value
keep track of positive numbers: max so far
keep track of negative numbers: min so far
variable for final result - default first index of array
loop through array --> keep track of current index, multiply fixed index by each subsequent in loop
create a temp max and check max of current index, current * max so far, current * min so far
do same for min
update max so far to = temp max
take max of result, max so far

*/

const maxProduct = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  // keep track of positive numbers
  let maxSoFar = nums[0];
  // keep track of negative numbers
  let minSoFar = nums[0];
  let result = maxSoFar
  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let tempMax = Math.max(currentNum, Math.max(maxSoFar * currentNum, minSoFar * currentNum))
    minSoFar = Math.min(currentNum, Math.min(maxSoFar * currentNum, minSoFar * currentNum))

    maxSoFar = tempMax;
    result = Math.max(maxSoFar, result)
  }

  return result;
};