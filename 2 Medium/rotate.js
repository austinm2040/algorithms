/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Input: matrix = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
Output: [[7,4,1],
         [8,5,2],
         [9,6,3]]

Example 2:

Input: matrix = [[5, 1, 9, 11],
                 [2, 4, 8, 10],
                 [13,3, 6, 7],
                 [15,14,12,16]]
Output: [[15,13,2, 5],
         [14,3, 4, 1],
         [12,6, 8, 9],
         [16,7, 10,11]]

Example 3:

Input: matrix = [[1]]
Output:         [[1]]

Example 4:

Input: matrix = [[1,2],
                 [3,4]]
Output: [[3,1],
         [4,2]]

Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

/*
n = matrix.length
1) Transpose Matrix
2) Rotate Matrix

1) Transpose:
  Double For Loop:
    0 < i < n
      0 < j < n
      Swap matrix[i][j] for matrix[j][i]

2) Reflect:
  Double For Loop:
    0 < i < n
      0 < j < (n/2)
      Swap matrix[i][j] for matrix[i][n - j - 1]
  Return matrix (transposed, then reflected)
*/

const rotate = (matrix) => {
  return transpose(matrix);
};

const transpose = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  return reflect(matrix);
};

const reflect = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
  return matrix;
};

/*
Input: matrix = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
Output: [[7,4,1],
         [8,5,2],
         [9,6,3]]

** (n = length - 1) **
[0,0] --> [0,n]
[0,1] --> [1,n]
[0,n] --> [n,n]

[1,0] --> [0,1]
[1,1] --> [1,1]
[1,n] --> [n,1]

[n,0] --> [0,0]
[n,1] --> [1,0]
[n,n] --> [n,0]

if (i = 0) --> i = j, j = n
if (i = 1) --> i = j, j = i
if (i = n) --> i = j, j = 0

Original:
[ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ] ]

Transposed:
[ [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 3, 6, 9 ] ]

Reflected (finished):
[ [ 7, 4, 1 ],
  [ 8, 5, 2 ],
  [ 9, 6, 3 ] ]
*/