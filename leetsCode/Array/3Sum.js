// The Problem Statement - Given an array of n integers, are there elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero. Note: The solution set must not contain duplicate triplets. Example:
// Given array nums = [-1, 0, 1, 2, -1. -4]
// A solution set is : [[-1,0,1], [-1,-1,2]];

// Solution 1
// Fastest Solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var rtn = [];
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return rtn;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};

// Solution 2
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const r = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const s = nums[i] + nums[left] + nums[right];
            if (s < 0) left += 1;
            else if (s > 0) right -= 1;
            else {
                r.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left += 1;
                while (left < right && nums[right] === nums[right - 1]) right -= 1;
                left += 1;
                right -= 1;
            }
        }
    }
    return r;
};



// Solution 2

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        let low = i+1, high = nums.length-1, sum = 0;

        while(low < high) {
            sum = nums[i] + nums[low] + nums[high];

            if(sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                while(nums[low+1] === nums[low]) low++;
                while(nums[high-1] === nums[high]) high--;
                low++;
                high--;
            } else if(sum < 0) low++;
            else high--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return result;
};


// Solution 3

var threeSum = function(nums) {
    let set = [];
    let length = nums.length;

    // sort list ascending
    nums = nums.sort((a,b) => {
        return a-b;
    });
    // [ -4, -1, -1, 0, 1, 2 ]
    for ( let i = 0; i < length -2 ; i++) {
        // always too big
        if ((nums[i] + nums[i+1] + nums[i+2]) > 0) {
            break;
        }
        // way too small
        if ( nums[i] + nums[length-2] + nums[length-1] < 0 ) {
            continue;
        }
        // avoid duplicate triplets
        if ( i>0 && nums[i] == nums[i-1]) {
            continue;
        }

        // a + b + c = 0
        // a + b = -c
        let l = i +1, r = length -1;
        let target = -(nums[i]);
        while (l < r ) {
            let sum = nums[l] + nums[r];
            // triplet sum greater than 0
            if(sum > target) {
                r--;
            }
            // triplet sum less than 0
            else if (sum < target) {
                l++;
            }
            // sum found
            else {
                // push to set
                set.push([ nums[i], nums[l], nums[r]]);

                // skip duplicates
                let curL = nums[l];
                while (l <r && nums[l] == curL) {
                    l++
                }
                // skip duplicates
                let curR = nums[r];
                while( l < r && nums[r] == curR) {
                    r--
                }
            }
        }
    }


    return set;
};