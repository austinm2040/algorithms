/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:

Input: matrix = [[1, 3, 5, 7],
                 [10,11,16,20],
                 [23,30,34,60]]
target = 3
Output: true

Example 2:

Input: matrix = [[1, 3, 5, 7],
                 [10,11,16,20],
                 [23,30,34,60]]
target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4
*/

/*
Double For Loop:
  Start i = 0, j = n - 1
  Check if target === matrix[i][j]
  else check if target > matrix[i][j] --> if so, break inner loop to increase i
*/

const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === target) {
        return true;
      }
      if (target > matrix[i][j]) {
        break;
      }
    }
  }
  return false;
};