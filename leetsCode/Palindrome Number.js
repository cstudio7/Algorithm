const nums = (x) => {
    let reverse = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)) reverse = reverse * 10 + i%10
    console.log(reverse)
    return reverse === x
}

console.log(nums(321))