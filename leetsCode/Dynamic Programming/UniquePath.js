
// DO this for Dynamic Programming
When Learning Dynamic Programming
Check Unique PathII
Minimum Path
Egg Drop


// 62. Unique Paths

//Problem
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?


const uniquePaths = function(m, n) {
// initially filling the whole matrix with 1's
    const dp=Array.from({length:m}).map(()=>new Array(n).fill(1));

    // starting from 2nd row(index 1) and 2nd col(index 1) as we know the no. of paths for 1st row(index 0) and 1st col(index 0) is always 1.
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
        }
    }
    return dp[m-1][n-1];
};
