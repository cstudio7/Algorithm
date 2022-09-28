// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
//
//     Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
//
//     The tests are generated such that there is exactly one solution. You may not use the same element twice.
//
//     Example 1:
//
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:
//
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:
//
// Input: numbers = [-1,0], target = -1
// Output: [1,2]



// Java solution

// public int[] twoSum(int[] numbers, int target) {
//     int res[]=new int[2];
//     int low=0,high=numbers.length-1;
//     while(low<=high)
//     {
//         if(numbers[low]+numbers[high]==target)
//         {
//             res[0]=low+1;
//             res[1]=high+1;
//             return res;
//         }
//         else if (numbers[low]+numbers[high]>target)
//             high--;
//         else
//             low++;
//     }
//
//     res[0]=-1;
//     res[1]=-1;
//     return res;
//
// }


// Python Solution

// def twoSum(self, numbers: List[int], target: int) -> List[int]:
// left, right = 0, len(numbers) - 1
//
// while left < right:
// mid = left + (right - left) // 2
// if numbers[left] + numbers[right] == target:
// return [left+1,right+1]
//
// if numbers[left] + numbers[mid] > target:
// right = mid
//
// if numbers[left] + numbers[right] < target:
// left += 1
//
// if numbers[left] + numbers[right] > target:
// right -= 1


// Python 3

// """
// 1. Brute Force T(n*n), S(1): if j > complement, The number after that must be lagrger than the j, don't search
// 2. Hash table T(n), S(n)
// """
// class Solution:
// def twoSum(self, numbers: List[int], target: int) -> List[int]:
// dic = dict()
// for i in range(0, len(numbers)):
// complement = target - numbers[i]
// if numbers[i] not in dic:
// dic[complement] = i + 1
// else:
// return [dic[numbers[i]], i+1]
// return []   # no pairs
// """
// 3. Two pointer T(n), S(1): use two indexes, one point to the first, one points to the last
// T(n), S(1)
// """
// class Solution:
// def twoSum(self, numbers: List[int], target: int) -> List[int]:
// low = 0
// high = len(numbers) - 1
// while(low < high):
// sum = numbers[low] + numbers[high]
// if sum < target:
// low += 1
// elif sum > target:
// high -= 1
// else:
// return [low+1, high+1]
// """


// 4. Binary Search (find target in the remaining array)
// T(nlogn)
// S(1)
// """
// class Solution:
// def twoSum(self, numbers: List[int], target: int) -> List[int]:
// for index, num in enumerate(numbers):
// new_target = target - num
// i, j = index + 1, len(numbers)-1
// # search the new value in numbers
// while i <= j:
// mid = (i + j)//2
// if numbers[mid] == new_target:
// return [index+1, mid+1]
// elif numbers[mid] > new_target:
// j = mid - 1
// else:
// i = mid + 1


let twoSum = (arr, val) => {
    let map = {};
    for(let i = 0; i<arr.length; i++){
        let diff = val - arr[i]
        if(map[diff]) return [map[diff], arr[i]]
        // one unique thing about object in an if block is
        // if(map[diff] === '2') here it checks the keys while
        //  if(map[diff] === '2') here it checks the values
        map[arr[i]] = arr[i]
        console.log(map)
    }
}

console.log(twoSum([2,5,6,9,8,11,20,10], 12))
