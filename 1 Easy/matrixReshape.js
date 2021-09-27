/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one
with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing
the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix
in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal,
output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Example 2:
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
*/

/*
Check if dimensions of reshaped matrix will work
  r * c === mat.length * mat[0].length --> return original matrix if not

Flatten original matrix
Create new (outter) array for reshaped matrix
Double For Loop
  0 <= i < r
  k = 0 --> k will be used to push each new element to reshaped matrix
  Declare inner array for reshaped matrix
    Inner Loop
    0 <= c < j
    Push current element to inner array, increase k by 1
  Push inner array to outter array
Return reshaped matrix
*/

const matrixReshape = (mat, r, c) => {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }

  mat = mat.flat();
  const reshaped = [];
  for (let i = 0, k = 0; i < r; i++) {
    const inner = [];
    for (let j = 0; j < c; j++) {
      inner.push(mat[k]);
      k++;
    }
    reshaped.push(inner);
  }
  return reshaped;
};