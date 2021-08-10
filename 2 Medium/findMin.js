/*

Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time
results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

*/

/*

edge case: nums length = 1 --> return nums[0]
define start and end of nums
check if start < end --> if so, nums is sorted, return nums[0]
otherwise, binary search:
will need to update start and end values
while loop --> while end > start
define midpoint
 if nums at mid > nums at mid + 1 --> Min = nums at mid + 1
 if nums at mid < nums at mid - 1 --> Min = nums at mid
 if nums at mid > nums at 0, min is in right side of midpoint --> update start varable to = mid + 1
 otherwise, min is in left side of midpoint --> update end variable to = mid - 1
*/

const findMin = (nums) => {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;
  // if last element is greater than the first element then there is no rotation
  if (nums[start] < nums[end]) {
    return nums[0];
  }
  while (end >= start) {
    let mid = start + Math.round((end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] > nums[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};