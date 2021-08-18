// Regular Recursion //
const fibRR = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};


// Top-Down (recursion + memoization) //
const fibTD = (n) => {
  let memo = new Array(n + 1).fill(0);
  return fibHelper(n, memo);
}
const fibHelper = (n, memo) => {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  if (memo[n] > 0) {
    return memo[n];
  }
  memo[n] = fibHelper (n - 1, memo) + fibHelper (n - 2, memo);
  return memo[n];
};


// Bottom-Up-Forward //
const fibBUF = (n) => {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// Bottom-Up-Backward //
const fibBUB = (n) => {
  let dp = new Array(n + 2).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 1; i < n; i++) {
    dp[i + 1] += dp[i];
    dp[i + 2] += dp[i];
  }
  return dp[n];
};

// Fib x:    0,1,2,3,4,5,6,7, 8, 9, 10
// Fib F(x): 0,1,1,2,3,5,8,13,21,34,55