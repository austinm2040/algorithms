/*
Write an efficient algorithm that searches for a target value in an m x n integer matrix.
The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example 1:
Input: matrix = [[1,4,7,11,15],
                 [2,5,8,12,19],
                 [3,6,9,16,22],
                 [10,13,14,17,24],
                 [18,21,23,26,30]],
target = 5
Output: true

Example 2:
Input: matrix = [[1,4,7,11,15],
                 [2,5,8,12,19],
                 [3,6,9,16,22],
                 [10,13,14,17,24],
                 [18,21,23,26,30]],
target = 20
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-10^9 <= matrix[i][j] <= 10^9
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-10^9 <= target <= 10^9
*/

/*
Set row variable = last row of matrix
Set col variable = 0
While loop --> (going backward by row, forward by col)
  check if matrix[row][col] === target --> return true
  Else
    if (matrix[row][col] > target)
      target not in row --> decrease row
    if (matrix[row][col] < target)
      target not in col --> increase col
If not found --> return false
*/

const searchMatrix = (matrix, target) => {
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      row--;
    } else if (matrix[row][col] < target) {
      col++;
    }
  }
  return false;
};