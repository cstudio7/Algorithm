function pairs(k, arr) {
    const orderedArr = arr.sort((a, b) => b - a);
    console.log(orderedArr)
    const hashmap = {};
    let c = 0;

    for (let i = 0; i < orderedArr.length; i++) {
        const item = orderedArr[i];
        const sum = item + k;
        console.log(sum, hashmap[sum],i)
        if (hashmap[sum] !== undefined) {

            c++;
        }
        hashmap[item] = i;
        console.log(hashmap)
    }
    console.log(hashmap)
    return c;
}

console.log(pairs(2,[5,2,1]))