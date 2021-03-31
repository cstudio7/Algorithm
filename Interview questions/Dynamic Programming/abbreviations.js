// function abbreviation(a, b) {
//     let c = a.toLowerCase()
//     let d = b.toLowerCase()
//     let map = {}
// for(let ele of d){
//     map[ele] = (map[ele] || 0) + 1
// }
// let count = 0
//     for(let ele of c){
//         map[ele] = (map[ele] || 0) - 1
//     }
//     for( let ele in map){
//         if(map[ele] === 1) {
//             return 'NO'
//         }
//         if(map[ele] === -1) {
//             count++
//         }
//     }
//     console.log(map)
//     if(count > 2) return 'NO'
//     return 'YES'
// }



function abbreviation(a, b) {
    let dp=Array(a.length+1).fill(0);
    for(let i=0;i<=a.length;i++){
        dp[i]=Array(b.length+1).fill(0);
    }
    dp[0][0]=1;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<=b.length;j++){
            if(dp[i][j]===0) continue;
            if(j<b.length && a[i].toUpperCase()===b[j]){dp[i+1][j+1]=1;}
            console.log(dp)
            if(a[i]!==a[i].toUpperCase()){dp[i+1][j]=1;}
            console.log(dp)
        }
    }
    console.log(dp)
    return dp[a.length][b.length]?"YES":"NO";
}
console.log(abbreviation('AB','AB'))