
Find the Missing Integer from 1 to 100
const twoSum = (nums) => {
    let total = 0;
    let count
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
       count = ( 9 * 10)/2 - total
    }
    return count
};

console.log(twoSum([1,2,3,4,5,7,8,9]))


const twoSum = (nums) => {
    let total = 1;
    let count
    for (let i = 0; i < nums.length; i++) {
        total ^= nums[i]
    }
    return total
};

console.log(twoSum([1,3,4,5,6,8,9]))