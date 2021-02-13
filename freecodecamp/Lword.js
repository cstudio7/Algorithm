function findLongestWord(str) {
    let words = str.split(" ");
    let long = 0;
    words.forEach(elm => {
        if(elm.length > long) {
            long = elm.length
        }
    });
    return long
    // let long = "";
    // for( let we of words){
    //     if( we.length > long.length ){
    //         long = we
    //     }
    // }
    // console.log(long.length)
}

console.log((findLongestWord("The boy jumped into the river")));

//My short solution

function findLongestWord(str) {
    let words = str.split(" ");
    const maxes = []
    for(let i = 0; i<words.length; i++){
        maxes.push(words[i].length)
    }
    console.log(Math.max(...maxes))
}

console.log((findLongestWord("The boy jumped into the river")));
