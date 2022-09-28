// function travelAgency(arr) {
//
//     newArr = new Set([...arr])
//
//     let i = 0, j = 0, temp = new Set, result = arr.length;
//     while (i < arr.length) {
//
//         if (temp.size === newArr.size) {
//             // console.log(j - i, i, j, temp)
//             if (j - i < result) result = j - i
//             i++
//             j = i
//             temp.clear()
//         }
//
//         if (j >= arr.length) {
//             // console.log(arr[j], j, "here", temp)
//             i++
//             j = i
//         }
//
//
//         if (!temp.has(arr[j])) {
//             temp.add(arr[j])
//             j++
//         } else {
//             j++
//         }
//
//     }
//     return result
// }

// console.log(travelAgency([2, 1, 1, 3, 2, 1, 1, 3]))
// console.log(travelAgency([7, 3, 7, 3, 1, 3, 4, 1]))
// console.log(travelAgency([7, 5, 2, 7, 2, 7, 4, 7]))
