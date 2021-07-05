
//Unbounded Knapsack Solution

// const leastCoins = (coins, amount) => {
//     const cache = Array(amount + 1);
//     cache.fill(amount + 1);
//     cache[0] = 0;
//
//     for (let i = 1; i <= amount; i++) {
//         for (let j = 0; j < coins.length; j++) {
//             if (coins[j] <= i) {
//                 cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
//             }
//         }
//     }
//
//     return cache[amount] > amount ? -1 : cache[amount];
// }


// Solution

// var coinChange = function(coins, amount) {
//     let dp = new Array(amount+1).fill(Infinity);
//     coins.sort((a,b) => a-b)
//
//     //initialize
//     dp[0]=0
//     for(let i=1; i<=amount;i++){
//         for(let j=0; j<coins.length;j++){
//             if(i>=coins[j]&&dp[i-coins[j]]!=Infinity){
//                 dp[i] = Math.min(dp[i-coins[j]]+1,dp[i])
//             }
//
//         }
//
//     }
//     if(dp[amount] === Infinity){
//         return -1
//     }
//     return dp[amount]
//
// };


// Solution 2 By resucursion

// const leastCoins = (coins, amount) => {
//     if (amount < 1) {
//         return 0;
//     }
//
//     const cache = Array(amount + 1);
//     cache.fill(0);
//
//     return coinChange(coins, amount, cache);
// }




// const coinChange = (coins, remainder, cache) => {
//     if (remainder < 0) {
//         return -1;
//     }
//
//     if (remainder === 0) {
//         return 0;
//     }
//
//     if (cache[remainder] !== 0) {
//         return cache[remainder];
//     }
//
//     let minimum = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < coins.length; i++) {
//         const coin = coins[i];
//         const changeResult = coinChange(coins, remainder - coin, cache);
//
//         if (changeResult >= 0 && changeResult < minimum) {
//             minimum = 1 + changeResult;
//         }
//     }
//
//     cache[remainder] = (minimum === Number.MAX_SAFE_INTEGER) ? -1 : minimum;
//
//     return cache[remainder];
// }
