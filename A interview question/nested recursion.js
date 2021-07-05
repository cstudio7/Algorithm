// Question in Algorithm Images


function me(arr, item)  {
    let sum = (c, item) => {
        let a = 0
        for(let i = 0; i<c.length;i++){
            if(c[i] === item){
                a++;
            }

            if(Array.isArray(c[i])) {
                a+=(sum(c[i],item))
            }
        }
        return a
    }
    let count = 0
    for(let i =0; i<arr.length;i++){
        if(arr[i] === item){
            count++
        }

        if(Array.isArray(arr[i])) {
            // console.log('hi')
            count+=(sum(arr[i],item))
        }
    }

    return count
}

console.log(me([
    "apple",
    25,
    [2,[25]],
    ["apple",25,[25,25]]
], 25))
