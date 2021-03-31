// Given a  2D Array, :
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
//
// a b c
//   d
// e f g
// There are  hourglasses in A, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.
//
// For example, given the 2D array:
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
// 0  0  8  6 6 0
// 0  0  0 -2 0 0
// 0  0  1  2 4 0
// We calculate the following  hourglass values:
//
//         -63, -34, -9, 12,
//         -10, 0, 28, 23,
//         -27, -11, -2, 10,
//         9, 17, 25, 18
// Our highest hourglass value is  from the hourglass:
//
//     0 4 3
//       1
//     8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description
//
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
//
//     hourglassSum has the following parameter(s):
//
// arr: an array of integers
// Input Format
//
// Each of the  lines of inputs  contains  space-separated integers .
//
//     Constraints
//
// Output Format
//
// Print the largest (maximum) hourglass sum found in .
//
// Sample Input
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output
//
// 19
// Explanation
//
// contains the following hourglasses:
//
//     image
// The hourglass with the maximum sum () is:
//
//     2 4 4
// 2
// 1 2 4
//


  // Answers

// function hourGlass(arr) {
//     // we could set this to 3 given the problems constraints, but this allows changes
//     maxX = 3; // + (arr[0].length % 3)
//     maxY = 3; // + (arr.length % 3)
//     total = -Infinity;  // has to be -64, but
//
//     // begin at y == 0
//     for (let y = 0; y <= maxY; y++) {
//         for (let x = 0; x <= maxX; x++) {
//             // sum the top of hourglass
//             let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
//             // get the middle of hourglass
//             sum += arr[y+1][x+1];
//             // sum the bottom of hourglass
//             sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
//
//             // don't store result to keep space complexity down
//             if (total < sum)
//                 total = sum;
//         }
//     }
//
//     return total;
// }
//
// let max = -63;
//
// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//         let sum = arr[i + 1][j + 1];
//         for (let k = 0; k < 3; k++) {
//             sum += arr[i][j + k];
//             sum += arr[i + 2][j + k]
//         }
//         if (sum > max) max = sum;
//     }
// }
//   return max;
// }
//
//
// function hourglassSum(arr) {
//     let top, mid, bottom = 0
//     //looking back idk why i thought these were pyramids!!!
//     let pyramid = []
//     let innerPyramid= []
//
//     function inOrder(a,b) {
//         return a - b
//     }
//
//     // outer loop moves up and down
//     for (const [index, value] of arr.entries()) {
//         if(index+2 < arr.length){
//             //inner loop goes left to right
//             for(const [innerIndex, innerValue] of value.entries()){
//                 if(innerIndex + 2 < value.length){
//                     //get the sum of the top
//                     top = innerValue + value[innerIndex+1] + value[innerIndex+2]
//                     //get the sum of the mid
//                     mid = arr[index+1][innerIndex+1]
//                     //get the sum of the bottom
//                     bottom = arr[index+2][innerIndex]+arr[index+2][innerIndex+1]+arr[index+2][innerIndex+2]
//                     //get the sum of the entire hourglass
//                     innerPyramid[innerIndex] = top+mid+bottom
//                 }else{
//                     break
//                 }
//             }
//             //combine the two arrays
//             Array.prototype.push.apply(pyramid, innerPyramid)
//         }else{
//             break
//         }
//     }
//     return pyramid.sort(inOrder)[pyramid.length - 1]
// }



