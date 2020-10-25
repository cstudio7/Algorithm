function maximumToys(prices, k) {
    let arr = prices;
    let arr2 = arr.sort((a,b) => a-b);
    let sum = 0;
    let arr3 = [];
    for(let i =0; i<arr2.length; i++){
        if((sum + arr2[i]) < k){
            sum = arr2[i] + sum;
            arr3.push(arr2[i])
        }
    }

}
console.log(maximumToys([1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9], 20))