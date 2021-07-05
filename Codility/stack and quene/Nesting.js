

// A string S consisting of N characters is called properly nested if:
//
// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
//     For example, string "(()(())())" is properly nested but string "())" isn't.
//
// Write a function:
//
// function solution(S);
//
// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
//
//     For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.
//
//     Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".


// // 100%
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let progress = true
//     let index = 0
//     let stack = []
//     let error = false
//     while (index < S.length) {
//         if (stack.length === 0) {
//             if (S[index] === ')' ) {
//                 return 0
//             } else {
//                 stack.push(S[index])
//             }
//         }
//         else if (is_properly_nested(stack[stack.length-1],S[index])) {
//             stack.pop(stack[stack.length-1])
//         } else {
//             if (S[index] === ')' ) {
//                 return 0
//             }
//             else {
//                 stack.push(S[index])
//             }
//         }
//         index ++
//     }
//
//     if (stack.length === 0) {
//         return 1
//     } else {
//         return 0
//     }
// }
//
// function is_properly_nested(a,b){
//     if  (a === '(' && b === ')')  {
//         return true
//     }
//     else {
//         return false
//     }
// }
