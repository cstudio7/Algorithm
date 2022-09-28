// A company is performing an analysis on the computers at its main office.
// The computers are spaced along a single row. The analysis is performed in the following way:
//
// 1. Choose a contiguous segment of a certain number of computers,
//     starting from the beginning of the row.
// 2. Analyze the available hard disk space on each of the computers.
// 3. Determine the minimum available disk space within this segment.
//
//     After performing these steps for the first segment, it is then
// repeated for the next segment, continuing this procedure until the
// end of the row (i.e if the segment size is 4, computers 1 to 4 would be analyzed, then 2 to 5, etc.)
// Given this analysis procedure, find the maximum available disk space among all the minima that are found during
// the analysis.constructor
//
// Example
//
// For following array [2, 5, 4, 6, 8] with x = 3, the answer is 4 see below
//
// The chunks would be:
//
//     [2, 5, 4] -> min: 2
//     [5, 4, 6] -> min: 4
//     [4, 6, 8] -> min: 4


//Not 100% correct
const diskSpaceAnalysis = (arr, m) => {
    const result = []
    // For following array [2, 5, 4, 6, 8] with x = 3, the answer is 4 see below
    //
    // The chunks would be:
    //
    //     [2, 5, 4] -> min: 2
    //     [5, 4, 6] -> min: 4
    //     [4, 6, 8] -> min: 4

    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (i >= n - 2) break
        result.push(Math.min(...arr.slice(i, m + i)))
    }
    return Math.max(...result)
}
console.log(diskSpaceAnalysis([2, 5, 4, 6, 8], 3))


//My correct Code
// const diskSpaceAnalysis = (arr, m) => {
//
//     let i = 0
//     let j = 0;
//     let count = arr[0];
//     let maxN = [];
//     while (i <= arr.length - m && j < arr.length) {
//         if (j === i + m) {
//             i++
//             j = i
//             maxN.push(count)
//             count = arr[i]
//             continue
//         }
//
//         if (arr[j] <= count) {
//             count = arr[j]
//         }
//         j++
//     }
//     maxN.push(count)
//     return Math.max(...maxN)
// }
// console.log(diskSpaceAnalysis([2, 5, 4, 6, 8], 3))


// console.log(diskSpaceAnalysis([2, 5, 4, 6, 8], 3))
// console.log(diskSpaceAnalysis([1, 2, 3, 1, 2], 1))
// console.log(diskSpaceAnalysis([8, 2, 4, 6], 2))
