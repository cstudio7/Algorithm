// Problem Statement — Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.

// Example:
//     Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


//Solution 1

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

