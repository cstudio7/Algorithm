
// Question:
// You are required to find missing numbers that are left out
// while an artist transports numbers from one array to other.
// The output array should be sorted.
//
//     Input:
// arr [ ] = {7, 2, 5, 3, 5, 3}
// brr [ ] = {7, 2, 5, 4, 6, 3, 5, 3}
//
// Output:
//     Missing numbers: {4, 6}

function missingNumbers(arr, brr) {
    for (let i = 0; i < arr.length; i++) {
        brr.splice(brr.indexOf(arr[i]),1)
    }
    return ([... new Set(brr)].sort((a, b) => { return a - b }));
}
