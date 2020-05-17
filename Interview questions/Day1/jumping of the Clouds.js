// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus.
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads.
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example,c = [0,1,0,0,0,1,0 ]  indexed from 0...6.
// The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths: 0 2 4 6 or 0 2 3 4 6.
// The first path takes 3 jumps while the second takes 4.

//     Function Description
//
// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
//
//     jumpingOnClouds has the following parameter(s):
//
// c: an array of binary integers
// Input Format
//
// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
//
// Output Format
//
// Print the minimum number of jumps needed to win the game.
//
//     Sample Input 0
//
// 7
// 0 0 1 0 0 1 0
// Sample Output 0
//
// 4


            // Javascript Solutions
// Note the loop always skips by 2 and whenever that happens i is moved forward by two steps

// You can break it down. Here's mine:

function jumpingOnClouds(c) {
    var numOfJumps = 0;
    var cloudLength = c.length;

    for (var i = 0; i < cloudLength-1; i++){

        if ((i + 2) < cloudLength && c[(i+2)] == 0) {    // This checks for the Doubles first, not to make it undefined and the end of the loop we added
            // i + 2 < cloudLength and to make it check by 2 we added the second condition
            numOfJumps++;
            i++;

        } else {          //Single, if the doubles is not fulfilled just increase the numOfjumps and move forward
            numOfJumps++;

        }
    }
    return numOfJumps;
}

function jumpingOnClouds(c) {
    let jumps = 0;
    for (let i = 0; i < c.length - 1; jumps++) {
        i += (c[i+2] === 0) ? 2 : 1;
    }

    return jumps;
}

I like the compactness, but I think we can get more readability with no loops, no if statements at all.


    function jumpingOnClouds(c) {
    let z = c.join('').split(1);
    let j = z.reduce((a,b)=>Math.floor(b.length/2)+a,0);
    let k = z.length;
    return j+k-1;
}

function jumpingOnClouds(c) {
    let count = -1;

    for(let i = 0; i < c.length; i++, count++){
        if(i < c.length-2 && c[i+2] == 0) i++;
        // console.log(c.length-2)
        // console.log(c[i+2])
        // console.log(i)
    }

    return count;
}

console.log(jumpingOnClouds([0,1,0,0,1,1,0]))
