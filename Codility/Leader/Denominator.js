

// An array A consisting of N integers is given. The dominator of array A is the value
// that occurs in more than half of the elements of A.
//
//     For example, consider array A such that
//
// A[0] = 3    A[1] = 4    A[2] =  3
// A[3] = 2    A[4] = 3    A[5] = -1
// A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A
// (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.
//
// Write a function
//
// function solution(A);
//
// that, given an array A consisting of N integers,
// returns index of any element of array A in which the dominator of A occurs.
// The function should return −1 if array A does not have a dominator.
//
//     For example, given array A such that
//
// A[0] = 3    A[1] = 4    A[2] =  3
// A[3] = 2    A[4] = 3    A[5] = -1
// A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.
//
//     Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

// 100%
// function solution(A) {
//     if (A.length === 1) return 0;
//     let max = 1;
//     let maxIndex = -1;
//     let occurrence = new Object();
//     for (let i = 0; i < A.length; i++) {
//         if (occurrence.hasOwnProperty(A[i])) {
//             occurrence[A[i]][0]++;
//             if (occurrence[A[i]][0] > max) {
//                 if (occurrence[A[i]][0] > A.length / 2) {
//                     max = occurrence[A[i]][0];
//                     maxIndex = occurrence[A[i]][1];
//                     return maxIndex;
//                 }
//             }
//         } else {
//             occurrence[A[i]] = new Array();
//
//             occurrence[A[i]][0] = 1;
//             occurrence[A[i]][1] = i;
//         }
//     }
//
//     return maxIndex;



// 83%

// function solution(A) {
// let map = {};
// let count = 0
// let t = 0
// for(let i = 0; i < A.length; i++) {
//     map[A[i]] = (map[A[i]] || 0) + 1
//     if (map[A[i]] > t) {
//         count = A[i]
//     }
// }
// let r = Math.max(...Object.values(map))
// for(let i in Object.values(map)){
//     if(i == r) return -1
// }
// return A.indexOf(count)
//
// }
