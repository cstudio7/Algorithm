
// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {};
//     for (let i = 0; i < B.length; i++){
//         if (B[i].includes(P)){
//             map[A[i].length] = A[i]
//         }
//     }
//     let count = []
//     for( let x of Object.keys(map)){
//         count.push(x)
//     }
//     return (map[Math.min(...count)]) ? (map[Math.min(...count)]) : 'NO CONTACT'
// }
// console.log(solution(['pim', 'pom'], ['121212121', '111111111', '444555666'], '112'))
// console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999'))
// console.log(solution(['sander', 'amy','ann', 'micheal'], ['123456789', '234567890', '7890123456', '123123123'], '1'))
//


//Most Accurate
// function solution(A, B, P) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {};
//     const counts = []
//     let ans = 0
//
//     for (let i = 0; i < B.length; i++){
//         if (B[i].includes(P)){
//             map[A[i].length] = A[i]
//
//             if(A[i].length > ans) {
//                 counts.push(A[i].length)
//             }
//         }
//     }
//     ans = Math.min(...counts)
//     console.log(counts, map, ans)
//     if(counts.length === 0){
//         return 'NO CONTACTS'
//     }
//     if(counts.length > 1){
//         return map[ans]
//     }
//     return map[ans]
// }
// console.log(solution(['pim', 'pom'], ['121212121', '111111111', '444555666'], '112'))
// console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999'))
// console.log(solution(['sander', 'amy','ann', 'micheal'], ['123456789', '234567890', '7890123456', '123123123'], '1'))
