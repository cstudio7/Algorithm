// You are given an unordered array consisting of consecutive integers [1, 2, 3, …, n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.
//     For example, given the array arr=[7,1,3,2,4,5,6] we perform the following steps:
//     i   arr                     swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took 5 swaps to sort the array.
//     Function Description
// Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.
//     minimumSwaps has the following parameter(s):
// arr: an unordered array of integers
// Input Format
// The first line contains an integer, n, the size of arr. The second line contains n space-separated integers arr[i].
//     Constraints
// 1≤n≤10⁰⁵
// 1≤arr[i]≤n
// Output Format
// Return the minimum number of swaps to sort the given array.
//     Sample Input 0
// 4
// 4 3 1 2
// Sample Output 0
// 3

//  Solution

// function minimumSwaps(arr) {
//     let swaps = 0;
//     let len = arr.length;
//     // Copy array
//     const arr2 = [...arr];
//     // Sorting the new array
//     // It will be used to know what's the next value in the array
//     // And swap if needed
//     arr2.sort((a, b) => {
//         if (a > b) return 1;
//         else if (a < b) return -1;
//         return 0;
//     });
//
//     // Create an object with values of our array as keys
//     // and position in array as values
//     const map = arr.reduce((acc, cur, i) => {
//         acc[cur] = i;
//         return acc;
//     }, {});
//     // Now we loop through the array
//     for (let i = 0; i < len; i += 1) {
//
//         const v1 = arr[i];
//         const v2 = arr2[i];
//
//         if (v2 != v1) {
//             swaps ++;
//             // Use the map to avoid to compute each time the position
//             const index = map[v2];
//             // swap value
//             arr[index] = v1;
//             arr[i] = v2;
//             // Update map
//             map[v1] = index;
//         }
//
//     }
//     return swaps;
// }
//
// function minimumSwaps(arr) {
//     let swaps = 0;
//     let smallest = Math.min(...arr);
//     let temp;
//     let indices = {};
//
//     arr.forEach((e,i) => indices[e] = i);
//
//     for (let i = 0; i < arr.length; i++) {
//         let smallestIdx = indices[smallest];
//
//         if (arr[i] !== smallest) {
//             temp = arr[i];
//             arr[i] = smallest;
//             arr[smallestIdx] = temp;
//             swaps++;
//             indices[smallest] = i;
//             indices[temp] = smallestIdx;
//         }
//         smallest += 1;
//     }
//     return swaps;
// }
//
//
// function minimumSwaps(arr) {
//     let swaps = 0;
//     const sorted = [...arr].sort((a, b) => a - b),
//         unsorted = arr;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (unsorted[i] !== sorted[i]) {
//             let index = unsorted.indexOf(sorted[i], i),
//                 temp = unsorted[i];
//             unsorted[index] = temp;
//             swaps++;
//         }
//     }
//     return swaps;
// }

