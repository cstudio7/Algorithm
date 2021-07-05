const str = (nu) => {
    let m = nu.toString()
    let me = []
    for(let i of m){
        me.push(i.toString())
    }
    return me
}

function solution(S) {
    let m = []
    let n = S
    let Stri = str(S)
    m.push(...Stri)
    let na = Math.floor(m.length/2)
let count = 1;
    // let result
    let sums = Number(m.join('')) * m[Math.floor(m.length/2)]
    m.push(...str(sums))
    let result = Number(m.join(''))
    while(m.length % 2 !== 0){
        let sum = result * m[Math.floor(m.length/2)]
        result = sum
        // console.log(sum)
        // console.log(Math.floor(m.length/2))
        m.push(...str(sum))

        count++
    }
    return count
}

console.log(solution( 198))


