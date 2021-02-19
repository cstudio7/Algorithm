// Problem Statement — Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.

// Example:
//     Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Best and fastest hashing solution

// var twoSum = (nums, target) => {
//     let map = {};
//     for (let i = 0; i<nums.length; i++ ){
//         if(map[nums[i]] !== undefined) return [map[nums[i]], i]
//         map[target - nums[i]] = i
//         console.log(map)
//     }
//
// }
//
// console.log(twoSum([2,7,11,15], 9))

//Solution 1
// Fastest Solution
const twoSum = (nums, target) => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];

        if (another in map) {
            return [map[another], i];
        }

        map[nums[i]] = i;
    }

    return null;
};

let dic = {}
for(let i = 0; i < nums.length; i++) {
    if (target-nums[i] in dic) {
        return [dic[target-nums[i]], i]
    }
    dic[nums[i]] = i
}

// Solution 2

const twoSum = (arr, target) => {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
// => Output [ 0, 1 ]

// My Brute force Solution

const twoSum = (arr, target) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[i] + arr[j + 1] == target){
                return 'Yes'
            }
        }
    }
    return 'No'
}

console.log(twoSum([2,11,15,7], 9))