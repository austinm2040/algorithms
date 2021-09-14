/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
1 <= n <= 2 * 10^4
0 <= height[i] <= 10^5
*/

/*

*/

const trap = (height) => {
  let total = 0;
  let left = 0;
  let right = height.length - 1;
  let leftWall = 0;
  let rightWall = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftWall ? (leftWall = height[left]) : total += (leftWall - height[left]);
      left++;
    } else {
      height[right] >= rightWall ? (rightWall = height[right]) : total += (rightWall - height[right]);
      right--;
    }
  }

  return total;
};