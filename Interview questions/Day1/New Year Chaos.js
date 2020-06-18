function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (let i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            return `Too chaotic`;
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                swaps++;
            }
        }
    }

    return swaps;
}

function minimumBribes(queue) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] - (i+1) > 2) { chaotic = true }
        for (let j = queue[i] - 2; j < i; j++) {
            if (queue[j] > queue[i]) { bribes++ }
        }
    }
    if(chaotic === true){
        console.log("Too chaotic")
    } else {
        console.log(bribes)
    }
}
