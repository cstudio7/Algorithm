//
//
// This is a demo task.
//
//     Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0)
// that does not occur in A.
//
//     For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// 100%
//
// function solution(A) {
//     let max = Math.max.apply(null,A);
//     if (max < 0) return 1;
//     let B = new Array(max).fill(0);
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] > 0) {
//             B[A[i] - 1]++;
//         }
//     }
//     let index = B.indexOf(0);
//     if ((index === -1)) {
//         return max + 1;
//     } else {
//         return index + 1;
//     }
// }


// 11%
// lesson treat edge cases at the beginning

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     A.sort((a,b)=> a-b)
//     let a = A[0]
//     let b = A[A.length - 1]
//     let count = 1
//     for (let i = a; i <= b; i++) {
//         if(i !== A[i-1]){
//             count = i
//         }
//     }
//     if(count < 0) return 1
//     return count === 1 ? b+1 : count
// }
//
//
// console.log(solution([1, 3, 6, 4, 1, 2]))

