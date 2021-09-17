/*
Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
You must do it in place.

Example 1:

Input: matrix = [[1,1,1],
                 [1,0,1],
                 [1,1,1]]
Output: [[1,0,1],
         [0,0,0],
         [1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],
                 [3,4,5,2],
                 [1,3,1,5]]
Output: [[0,0,0,0],
         [0,4,5,0],
         [0,3,1,0]]

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-2^31 <= matrix[i][j] <= 2^31 - 1
*/

/*
m = row, n = column
Need to record all cells where matrix[m][n] === 0
if matrix[m][n] === 0 --> (for loop) matrix[i][n] = 0, matrix[m][j] = 0
  Create 2 arrays -> track rows, col where cell = 0
  Double For loop
    If matrix[m][n] === 0 --> push m to rows array, n to cols array
  Double For loop:
    Check if either rows or cols array contains a zero
      if so --> set matrix[m][n] = 0
Return matrix
*/

const setZeroes = (matrix) => {
  const rows = [];
  const cols = [];
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[0].length; n++) {
      if (matrix[m][n] === 0) {
        rows.push(m);
        cols.push(n);
      }
    }
  }

  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[0].length; n++) {
      if (rows.indexOf(m) > -1 || cols.indexOf(n) > -1) {
        matrix[m][n] = 0;
      }
    }
  }
  return matrix;
};