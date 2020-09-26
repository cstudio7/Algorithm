function substrCount(n, s) {
    const a = s.split("").reduce((acc, el, i, arr) => {
        if (el === acc[0]) {
            acc[1] = acc[1] + 1;
        } else {
            if (acc[0] !== "") acc[2].push([acc[0], acc[1]]);
            acc[0] = el;
            acc[1] = 1;
        }
        if ((i + 1) === arr.length) {
            acc[2].push([acc[0], acc[1]])
        }
        return acc
    }, ["", 0, []])[2]
    //console.table(a);
    let last = a.length - 1;
    return a.reduce((acc, el, i, arr) => {
        acc = acc + (el[1] * (el[1] + 1) / 2)
        if ((el[1] == 1) && (i != 0) && (i != last) && (arr[i - 1][0] == arr[i + 1][0])) {
            acc = acc + Math.min(arr[i - 1][1], arr[i + 1][1])
        }
        return acc
    }, 0)
}

console.log(substrCount(5, 'mnonopoo'))
