/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/*
Time complexity: 0(log n) --> need to use pivot or divide & conquer
Create left & right pointer variables to move pivot index
While loop --> while left pointer <= right pointer
  Pivot index = midpoint of current section of array
  base case: check if target is = nums[pivot] --> if so, return pivot
  if target < number, move right pointer to current pivot index - 1
  if target > number, move left pointer to current pivot index + 1
return - 1 if not found
*/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length;
  let pivot;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
};