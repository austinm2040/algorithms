/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

Constraints:

0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5

*/

/*
Can have duplicate numbers, only if all in original nums array
No duplicate triplets

First sort nums array
track all triplets in array

For loop --> 0 <= i < nums.length - 2
  Check that triplets array will not have a duplicate
  if (nums[i] !== nums[i + 1])
    declare left & right pointer variables -> i = i + 1, right = nums.length - 1
  While loop --> while left < right
    Declare currentSum = sum of (nums[i] + nums[left] + nums[right])
    if currentSum === 0 --> push to triplet array
    Ensure triplet array does not contain duplicates
      While loop --> nums[left] === nums[left + 1]
        increase left by 1
      While loop --> nums[right] === nums[right - 1]
        decrease right by 1
    Out of while loops --> Increase left by 1, decrease right by 1
    Check if currentSum < 0 --> increase right by 1
    otherwise, decrease right by 1
Return triplet array
*/

const threeSum = (nums) => {
  nums.sort((a,b) => a - b);
  const len = nums.length;
  const triplets = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] !== nums[i - 1]) { // 
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};