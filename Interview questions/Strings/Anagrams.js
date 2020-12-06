function makeAnagram(a, b) {
    let c = a.split("");
    let d = b.split("");
    let countA = c.length;
    let countB = d.length;
    let count = countA + countB;
    let pair = 0;
    for(let i = 0; i < countA; i++){
        for(let j = 0; j < countB; j++){
            if(c[i] == d[j]){
                d.splice(j,1);
                pair++;
                break;
            }
        }
    }
    return count - (pair*2);
}

console.log(makeAnagram( 'fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))


// let str = 'abcdef'
// for( i  of str){
//     let index = i.charCodeAt(0) - 97
//     console.log(index)
// }

//Note: Math.max returns NaN for an array with empty spaces, so you have to remove the empty spaces before applying it,
//else it wont work
// Removing empty and duplicates in an array
// Where map is the array with empty spaces and map2 is the filtered array
const map2 =  map.filter(arr => {
    return /\S/.test(arr);
})


function makeAnagram(a,b){
    let map = [];
    let index;
    for(let i of a){
        index = i.charCodeAt(0) - 97;
        map[index] = map[index] || 0;
        map[index] = map[index] + 1;
    }

    console.log(map)

    for(let i of b){
        index = i.charCodeAt(0) - 97;
        map[index] = map[index] || 0;
        map[index] -= 1;
        console.log(map)
    }
    console.log(map.reduce((a,b) => {
        return a + Math.abs(b);
    },0));
}

console.log(makeAnagram('abcabc','zabcabce'))
console.log(makeAnagram( 'fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
