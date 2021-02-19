// Given an array of integers, find if the array contains any duplicates.
//
//     Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//
//     Example 1:
//
// Input: [1,2,3,1]
// Output: true
// Example 2:
//
// Input: [1,2,3,4]
// Output: false
// Example 3:
//
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


// var containsDuplicate = function(nums) {
//     let map = {};
//     let count = 0;
//     if(nums.length === 0){
//         return false
//     }
//     for(let i = 0; i < nums.length; i++){
//         map[nums[i]] =  (map[nums[i]] + 1) || 0
//     }
//     // for( let x in map){
//     //     if(map[x] > 0) {
//     //         return true
//     //     }
//     // }
//     // return false
//     const new1 = Object.values(map)
//     console.log(new1)
// };
//
// console.log(containsDuplicate([2,14,18,22,22]))

