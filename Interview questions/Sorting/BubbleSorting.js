function countSwaps(a) {
    let arr = a;
    let sorted = false;
    let count = 0
    while(!sorted){
        sorted = true;
        for(let i =0; i < arr.length; i++){
            if(arr[i] < arr[i -1]){
                var temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
                count++
                sorted = false
            }
        }
    }
    let first = arr[0];
    let last = arr[arr.length - 1]
    console.log(`Array is sorted in ${count} swaps`)
    console.log(`First Element: ${first}`)
    console.log(`Last Element: ${last}`)
}
console.log(countSwaps([1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9]))