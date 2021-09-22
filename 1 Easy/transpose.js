/*
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal,
switching the matrix's row and column indices.

Example 1:
Input: matrix = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
Output: [[1,4,7],
         [2,5,8],
         [3,6,9]]

Example 2:
Input: matrix = [[1,2,3],
                 [4,5,6]]
Output: [[1,4],
         [2,5],
         3,6]]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 10^5
-10^9 <= matrix[i][j] <= 10^9
*/

/*
0,0 --> 0,0
0,1 --> 1,0
0,2 --> 2,0

Create empty matrix to push transposed values to
Double For loop
  First loop --> i = 0, i < matrix[0].length
  declare inner matrix (col)
    Second loop --> j = 0, j < matrix.length
    push matrix[j][i] to col array to transpose values
  push each col array to transposed matrix
Return transposed matrix
*/


const transpose = (matrix) => {
  const transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    transposed.push(col);
  }
  return transposed;
};