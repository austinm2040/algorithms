/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2, 3, 4],
                 [5,6, 7, 8],
                 [9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/


/*
m = rows; n = cols
Spiral order = from [0,0] --> right, down, left, up, right, etc

Pushing to new array:
[i,0], [i,1], ... , [i, array[i].length - 1],
[i + 1, array[i].length - 1], ... , [array.length - 1, array[i].length - 1],
[array.length - 1, array[i].length - i + 1], ...

Declare variables for right, down, left, up
While loop:
  While length of new spiraled array < m * n

  For loops:
    Moving right:
     col = left, col <= right, col++
     push spiral at matrix[up][col]
    Moving down:
     row = up + 1, row <= down, row++
     push spiral at matrix[row][right]
   *Check if on a new row*
    if up !== down
     Moving left:
     col = right - 1, col >= left, col--
     push spiral at matrix[down][col]
   *Check if on a new col*
    if left !== right
     Moving up:
     row = rigdownht - 1, row > up, row--
     push spiral at matrix[row][left]
  Decrease Right, Down by 1;
  Increase Left, Up by 1;
    ===>
   /\  ||
   ||  \/
    <===
Return spiraled array
*/

const spiralOrder = (matrix) => {
  const spiral = [];
  const m = matrix.length;
  const n = matrix[0].length;
  let right = n - 1;
  let down = m - 1;
  let left = 0;
  let up = 0;

  while (spiral.length < m * n) {
    for (let col = left; col <= right; col++) { // move right
      spiral.push(matrix[up][col]);
    }
    for (let row = up + 1; row <= down; row++) { // move down
      spiral.push(matrix[row][right]);
    }
    // Check if on a new row
    if (up !== down) {
      for (let col = right - 1; col >= left; col--) { // move left
        spiral.push(matrix[down][col]);
      }
    }
    // Check if on a new col
    if (left !== right) {
      for (let row = down - 1; row > up; row--) { // move up
        spiral.push(matrix[row][left]);
      }
    }
    right--;
    down--;
    left++;
    up++;
  }
  return spiral;
};