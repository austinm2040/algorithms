/*

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length)
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-10^4 <= target <= 10^4

*/

/*
define start and end (0, nums.length - 1)
use while loop -> will be updating start and end since nums originally in ascending order
 define midpoint
 check if target = midpoint
 First check if midpoint value >= start
  1) if start value =< target & midpoint value > target --> update end to left of midpoint
  2) else update start to right of midpoint
 If midpoint value < start
  1) if end value >= target & midpoing value < target --> update start to right of midpoint
  2) else update end to left of midpoint
 If value not found, return -1
*/

const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (end >= start) {
    let mid = start + Math.round((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else {
    if (nums[mid] >= nums[start]) {
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[end] >= target && nums[mid] < target) {
        start = mid + 1;
      } else {
          end = mid - 1;
        }
      }
    }
  }
  return -1;
};