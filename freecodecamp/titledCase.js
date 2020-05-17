// TittleCase
//    function titleCase(str) {
//     let words = str.toLowerCase().split(" ");
//     for (let i = 0; i<words.length; i++){
//          words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//      }
//        return words.join(" ")
//    }

// Method 2
function titleCase(str){
    let titled = str.toLowerCase().split(" ").map( ele => {
        return ele[0].toUpperCase() + ele.slice(1);
    })
    return titled.join(" ")
}
console.log(titleCase("i am always doing very well no mater the whether"));



