// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//
// Example 1:
//
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//     Example 2:
//
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.









//faster solution

const best = (arr) => {
    let  result = 0
    let m = arr[0]
    for(let i = 0; i <arr.length;i++){
        if(arr[i] < m){
            m = arr[i]
        }
        let sum = arr[i] - m
        if(sum > result){
            result = sum
        }
    }
    return result
}
console.log(best([7,1,5,3,6,4]))


// Slow Solution

const best = (arr) => {
    let  result = 0
    let sum
    for(let i = 0; i <arr.length;i++){
        sum = arr[i]
        let me = Math.max(...arr.slice(i, arr.length))
        let e = me - sum
        if( e > result){
            result = e
        }
    }
    return result
}
console.log(best([7,1,5,3,6,4]))