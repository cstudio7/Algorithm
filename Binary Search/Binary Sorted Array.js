// There is an integer array nums sorted in ascending order (with distinct values).
//
// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
//
//     Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
//
//     You must write an algorithm with O(log n) runtime complexity.

// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
//
// Input: nums = [1], target = 0
// Output: -1

const BinarySearch = (arr, target) => {
    arr.sort((a,b)=>a-b)
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let mid = left + (right - left)/2
        if(target === arr[mid]){
            return mid
        } else if (target < arr[mid]){
            right = mid - 1;
        }  else {
            left = mid + 1;
        }
    }
    return false
}

console.log(BinarySearch([0,1,2,4,5,6,7], 1))


// Binary Search Indepth
// Why is the condition of while loop left <= right instead of left < right ?
//     The searching should be terminated only when the array is empty. At each step, our searching array is [left, right], when left = right, the array still contains 1 element and we need to check it.
//     Why do we haveleft = mid + 1 and right = mid — 1 instead of left = mid and right = mid ?
//     The element at mid index has already been checked, so we don’t need to include it in the next searching array.
//     If we include mid index in the next searching array, we may end up with an infinite loop when left = right . For example:
//     Input: arr = [1], target = 3
// We start with:
// left = 0, right = 0
// We have:
//     mid = 0 + (0-0)/ 2 = 0
// as arr[mid] = 1 < target, if we update left = mid = 0
// We end up checking left = 0, right = 0 again ...


            // 2. Find the first position of element


// Given a sorted array and a target number.
//     Return the index of the first target number in the array if it exists, otherwise return -1.
// Examples:
//     Input: arr = [-3, 5, 6, 8, 10, 11, 15], target = 5
// Output: 1
// Input: arr = [-3, 5, 6, 6, 6, 10], target = 6
// Output: 2
// Input: arr = [-3, 5, 6, 6, 6, 10], target = 7
// Output: -1
//

        // def find_first_pos(arr, target):
        // left = 0
        // right = len(arr) - 1
        //
        // first_position = -1     # keep track of the latest valid mid position
        // while left <= right:
        // mid = left + (right - left) // 2
        // if arr[mid] == target:
        // first_position = mid
        // right = mid - 1     # continue searching to the left
        // elif arr[mid] < target:
        // left = mid + 1
        // else:
        // right = mid - 1
        //
        // return first_position


// We add a variable first_position to keep track of the latest valid mid index.
//     We do not stop when finding out the target number, but continue searching on the left side.
// 3. Find the last position of the element
// Given a sorted array and a target number.
//     Return the index of the last target number in the array if it exists, otherwise return -1.
// Examples:
//     Input: arr = [-3, 5, 6, 8, 10, 11, 15], target = 5
// Output: 1
// Input: arr = [-3, 5, 6, 6, 6, 10], target = 6
// Output: 4
// Input: arr = [-3, 5, 6, 6, 6, 10], target = 7
// Output: -1


            // def find_last_pos(arr, target):
            // left = 0
            // right = len(arr) - 1
            //
            // last_position = -1      # keep track of the latest valid mid position
            // while left <= right:
            // mid = left + (right - left) // 2
            // if arr[mid] == target:
            // last_position = mid
            // left = mid + 1      # continue searching to the right
            // elif arr[mid] < target:
            // left = mid + 1
            // else:
            // right = mid - 1
            //
            // return last_position
//
// We add a variable last_position to keep track of the latest valid mid index.
//     We do not stop when finding out the target number, but continue searching on the right side.
// 4. Find the left border element
// Given a sorted array and a target number.
//     Return the index of the largest element which is smaller than target if it exists, otherwise return -1.
// Examples:
//     Input: arr = [-3, 5, 6, 8, 10, 11, 15], target = 5
// Output: 0
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 6
// Output: 1
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 7
// Output: 3
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 1000
// Output: 5
// Input: arr = [-3, 5, 6, 6, 7, 10], target = -5
// Output: -1

                // def find_left_border(arr, target):
                // left = 0
                // right = len(arr) - 1
                //
                // left_border = -1        # keep track of the latest smaller number
                // while left <= right:
                // mid = left + (right - left) // 2
                // if arr[mid] < target:
                // left_border = mid
                // left = mid + 1
                // else:   # in case arr[mid] >= target
                // right = mid - 1
                //
                // return left_border
//
// We add a variable left_border to keep track of the latest number which is smaller than the target.
//     We consider the case arr[mid] = target is the same as arr[mid] > target
// 4. Find the right border element
// Given a sorted array and a target number.
//     Return the index of the smallest element which is larger than target if it exists, otherwise return -1.
// Examples:
//     Input: arr = [-3, 5, 6, 8, 10, 11, 15], target = 5
// Output: 2
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 6
// Output: 4
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 7
// Output: 5
// Input: arr = [-3, 5, 6, 6, 7, 10], target = 1000
// Output: -1
// Input: arr = [-3, 5, 6, 6, 7, 10], target = -5
// Output: 0

            // def find_right_border(arr, target):
            // left = 0
            // right = len(arr) - 1
            //
            // right_border = -1       # keep track of the latest larger number
            // while left <= right:
            // mid = left + (right - left) // 2
            // if arr[mid] <= target:
            // left = mid + 1
            // else:
            // right_border = mid
            // right = mid - 1
            //
            // return right_border
//
// We add a variable right_border to keep track of the latest number which is larger than the target.
//     We consider the case arr[mid] == target is the same as arr[mid] < target







