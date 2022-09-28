function threeSum(arr) {
    const result = []
    arr.sort((a, b) => a - b)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue
        for (let j = i + 1; j < arr.length; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                console.log(j, i + 1)
                continue
            }
            for (let k = j + 1; k < arr.length; k++) {
                // console.log(arr[j], arr[j - 1], result, "ff")
                if (k > k + 1 && arr[k] === arr[k - 1]) continue
                if (arr[i] + arr[j] + arr[k] === 0) {
                    // console.log(i, j, k)
                    result.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
