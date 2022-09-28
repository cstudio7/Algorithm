
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // let me = S.split('')
//     let map = []
//     let count = []
//     let c = 0
//     for(let i = 0; i< S.length; i++ ) {
//         if (Number(S[i]) || S[i] === "0") {
//             count.push(S[i]);
//             c++
//         }
//
//         if(c === 3){
//             if(i === S.length -1) break
//             count.push('-')
//             c = 0
//         }
//     }
//
//     return count.join('')
// }
//
// console.log(solution( '555372654'))


//Most Accurate
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // let me = S.split('')
//     let count = []
//     let c = 0
//     const A = S.trim()
//     for(let i = 0; i< A.length; i++ ) {
//         if (Number(A[i]) || A[i] === "0") {
//             count.push(A[i]);
//             c++
//         }
//
//         if(c === 3){
//             if(i === A.length -1) break
//             count.push('-')
//             c = 0
//         }
//     }
//     let next = count[count.length - 3];
//     if(count[count.length -2] === '-'){
//         count[count.length - 3] = '-'
//         count[count.length - 2] = next
//
//     }
//
//     return count.join('')
// }

