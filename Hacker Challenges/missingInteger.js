
// Find the Missing Integer from 1 to 100



const twoSum = (nums) => {
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total ^= nums[i]
    }
    return total
};

console.log(twoSum([1,3,4,5,6,8,9]))
