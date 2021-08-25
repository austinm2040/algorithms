/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:

Input: numRows = 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

Example 2:

Input: numRows = 1
Output:
[
 [1]
]

Constraints:

1 <= numRows <= 30
*/

/*
[
  [1],[]
]
*/

/*
create new array, triangle with indices = numRows
For loop:
 starting at i = 0, generate a new sub-array (each row) at each index of triangle
  set default value to 1, since all rows have value 1 at ends
  Second For loop:
   starting at j = 1 and going up to 1 less than row length (exclusive, since we won't add the ends --> keep at 1)
   update each sub-array (row) index value to be sum of [previous row (i - 1)] at current index and 1 + current index
    example, row 3 would be 1, (1+1), 1
  update triangle at ith index = completed row
return triangle
*/

const generate = (numRows) => {
  const triangle = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }

    triangle[i] = row;
  }
  return triangle;
};

/*
NumRows = 5:
[
  First row = [1]
  Second row = [1,1] (1+0, 1+0)
  Third row = [1,2,1] (1+0, 1+1, 1+0)
  Fourth row = [1,3,3,1] (1+0, 1+2, 1+2, 1+0)
  Fifth row = [1,4,6,4,1] (1+0, 1+3, 3+3, 1+3, 1+0)
]
/*