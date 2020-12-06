
// You are given an array and you need to find number of tripets of indices (i,j,k) such that the elements at those
// indices are in geometric progression for a given common ratio  and .
//
//     For example, arr = [1,4,16,64] . If r = 4 , we have [1,4,16]  and [4,16,64] at indices (0,1,2) and (1,2,3).
//
//     Function Description
//
// Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.
//
//     countTriplets has the following parameter(s):
//
// arr: an array of integers
// r: an integer, the common ratio
// Input Format
//
// The first line contains two space-separated integers  and , the size of  and the common ratio.
//     The next line contains  space-seperated integers .
//
//     Constraints
//
// Output Format
//
// Return the count of triplets that form a geometric progression.
//
//     Sample Input 0
//
// 4 2
// 1 2 2 4
// Sample Output 0
//
// 2
// Explanation 0
//
// There are  triplets in satisfying our criteria, whose indices are  and
//
// Sample Input 1
//
// 6 3
// 1 3 9 9 27 81
// Sample Output 1
//
// 6
// Explanation 1
//
// The triplets satisfying are index , , , ,  and .
//
//     Sample Input 2
//
// 5 5
// 1 5 5 25 125
// Sample Output 2
//
// 4
// Explanation 2
//
// The triplets satisfying are index , , , .

// WORKING
function countTriplets(arr, r) {
    var map2 = {};
    var map3 = {};
    var count = 0;
    for (var i = 0; i < arr.length; ++i) {
        var n = arr[i];
        if (map3[n]) {
            count += map3[n];
        }
        if (map2[n]) {
            map3[n * r] = map3[n * r] ? map3[n * r] + map2[n] : map2[n];
        }
        map2[n * r] = map2[n * r] ? map2[n * r] + 1 : 1;
    }
    return count;
}

// NOT WORKING
function countTripletsWHAT(arr, r) {
    let count = 0;
    let dict2 = {};
    let dict3 = {};
    for(let num of arr) {
        count += (dict3[num] || 0);
        dict2[num * r] = (dict2[num * r] || 0) + 1;
        dict3[num * r] = (dict3[num * r] || 0) + (dict2[num] || 0);
    }
    return count;
}

// function countTriplets(arr, r) {
//
//     let map = {}, res = 0;
//     arr.forEach((el) => {
//         if (!map[el]) map[el] = {length:0, prev:0};
//         let divisor = map[el/r];
//         if (divisor) {
//             res += divisor.prev;
//             map[el].prev += divisor.length;
//         }
//         map[el].length++;
//     });
//     return res;
// }

// function countTriplets(arr, r) {
//     let count = 0;
//     let num_counts = {};
//     let triplet_store = {};
//
//     for (const num of arr) {
//         if(!num_counts[num]){
//             num_counts[num] = 0;
//         }
//
//         // *no care for remainders*
//         const prev_num = num / r;
//         if(!num_counts[prev_num]){
//             num_counts[prev_num] = 0;
//         }
//         const prev_count = num_counts[prev_num];
//
//         if(!triplet_store[prev_num]){
//             triplet_store[prev_num] = 0;
//         }
//         // prev_num used to store aggregate of 2nd and 1st position counts
//         count += triplet_store[prev_num];
//
//         num_counts[num]++;
//         if(!triplet_store[num]){
//             triplet_store[num] = 0;
//         }
//         // storing current num (2nd pos) counts plus previous (1st pos) counts
//         triplet_store[num] = triplet_store[num] + prev_count;
//     }
//     return count;
// }
