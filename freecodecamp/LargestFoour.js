function largestFour(arr) {
    let maxes = [];
    for(let i = 0; i<arr.length; i++) {
        let tempMax = arr[i][0];
        console.log("tempMax is : " + tempMax)
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] >= tempMax){
                tempMax = arr[i][j]
            }
            // console.log(arr[i][j])
        }
        maxes.push(tempMax);
    }
    return maxes
}

console.log(largestFour([[2,3,4,3], [7,8,2,1], [3,3,2,45],[4,47,4,3]]))

// My short solution

function largestFour(arr) {
    let maxes = [];
    for(let i = 0; i<arr.length; i++) {
        maxes.push(Math.max(...arr[i]))
    }
    return maxes
}

console.log(largestFour([[2,10,4,3], [7,8,2,1], [3,3,2,45],[4,47,4,3]]))
