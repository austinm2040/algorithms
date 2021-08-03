/*

Given an integer array nums, return an array answer such that answer[i] is equal to
the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

//  2 arrays - left & right
// left will start with value at begninning
// right will need to be length of input array, last value is 1
// loop through left and push product of left contents and input array contents
// do same with right, but loop backward
// create array for products
// multiply all numbers and push to products array

const productExceptSelf = (nums) => {
  let leftArr = [1];
  let rightArr = Array(nums.length).fill(null);
  let prodArr = [];

  for (let i = 1; i < nums.length; i++) {
    leftArr.push(leftArr[i - 1] * nums[i - 1]);
  }

  rightArr[rightArr.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    prodArr.push(leftArr[i] * rightArr[i]);
  }

  return prodArr;
};