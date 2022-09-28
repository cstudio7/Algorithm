// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//
//     A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
//
// Input: digits = ""
// Output: []
// Example 3:
//
// Input: digits = "2"
// Output: ["a","b","c"]



// DFS
const L = {
    "2":"abc",
    "3":"def",
    "4":"ghi",
    "5":"jkl",
    "6":"mmno",
    "7":"pqrs",
    "8":"tuv",
    "9":"wxyz",
}


//
// const letterCombinations = function(D) {
//     let len = D.length, ans = []
//     if(!len) return []
//
//     const dfs = (pos, str) => {
//         if(pos === len) ans.push(str)
//         else {
//             let letters = L[D[pos]]
//             // console.log(ans, typeof str)
//             for(let i = 0; i<letters.length; i++){
//                 // console.log(str + letters[i])
//                 dfs(pos+1, str+letters[i])
//             }
//         }
//     }
//     dfs(0,"")
//     return ans
// };
//
// console.log(letterCombinations("23"))
