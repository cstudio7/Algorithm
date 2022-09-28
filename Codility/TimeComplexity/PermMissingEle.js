// This is a demo task.
//
//     Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
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
// function solution(A) {
//     let N = A.length;
//     let count = new Array(N+1).fill(0);
//     for (let i = 0; i< N; i++) {
//         count[A[i]-1] = 1;
//     }
//     //add 1 because the array starts at 1
//     return(count.indexOf(0)+1)
// }
