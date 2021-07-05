
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
//
//
//
//     Example 1:
//
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
//
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
//
// Input: nums = [1]
// Output: [[1]]


// function permutation (nums) {
//
//     const solArr = [];
//
//     function buildSolArr (currArr = [], storage = {}){
//
//         if(currArr.length === nums.length){
//             return solArr.push(currArr.slice());
//         }
//
//         for( const num of nums){
//             if(!storage[num]){
//                 currArr.push(num);
//                 storage[num] = true;
//                 buildSolArr(currArr, storage);
//                 currArr.pop();
//                 storage[num] = false;
//             }
//         }
//     }
//
//     buildSolArr();
//     return solArr
// }
//
// console.log(permutation([1,2,3]))
