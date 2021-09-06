/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]],
word = "ABCB"
Output: false

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

*/

/*
Start [0,0]
if curr [i][j] === word[k] --> replace with symbol so as not to duplicate
check up, left, down, right when able
if adjacent !== word[k] go back to [i][j]
if no adjacent cells = word[k], use regression to start anew, at [i][j + 1]
*/

const exist = (board, word) => {
  const len1 = board.length;
  const len2 = (board[0] || []).length;
  const len3 = word.length;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (existHelper(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

const existHelper = (board, word, m, n, k) => {
  if (k === word.length) {
    return true;
  }
  if (m < 0 || m >= board.length) {
    return false;
  }
  if (n < 0 || n >= board[m].length) {
    return false;
  }
  if (board[m][n] !== word[k]) {
    return false;
  }
  let result = false;
  const char = board[m][n];

  board[m][n] = '#';

  result = existHelper(board, word, m - 1, n, k + 1)
        || existHelper(board, word, m + 1, n, k + 1)
        || existHelper(board, word, m, n - 1, k + 1)
        || existHelper(board, word, m, n + 1, k + 1);

  if (!result) {
    board[m][n] = char;
  }

  return result;
};