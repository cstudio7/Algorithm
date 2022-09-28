
// There is a given array of integers. Start with some values x, and add each of
//array elements to it consecutively. That is, calculating a running sum of
// x plus each of the array elements. Determine the minimum value of x at least 1,
// even at the outset. The value of x can never be less than 1.


// Examples
// arr = [-4,3,2,1]

// if x=5, the running sums are:
// 5+(-4) = 1
// 1+3 = 4
// 4+2 =6
// 6+1 =7

// There is no smaller value for x that satisfies the condition

// arr = [3,-6,5,-2,1]
// if the starting value is 4, running sums are [7,1,6,4,5].
// This is the minimum starting value.

// arr = [5]
// The starting value of x is 1.

// const stayPositive = (arr) => {
//     let x = 1
//     let temp = 0
//     for(let i = 0; i<arr.length; i++){
//         let count = x + arr[i]
//         if(x + arr[i] <= 0){
//             let f = arr[i-1]|| 0
//             let t = Math.abs(arr[i]) + 1
//             let u = x + f
//             let m = t - u
//             x+=m
//         }
//     }
//     return x
// }
//
// console.log(stayPositive([-4,3,2,1]))
