function sockMerchant(n, ar) {
    const map = {};
    for(let i = 0; i < ar.length; i++){
        map[ar[i]] = (map[ar[i]] + 1) || 1
        console.log(map)
    }
    let count = 0
    for( let i of Object.values(map)){
        if(i > 1){
            count += Math.floor(i/2)
        }
    }
    return count
}

console.log(sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]))