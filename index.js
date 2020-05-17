function getMoneySpent(keyboards, drives, b) {

    let total = [];

    keyboards.forEach(y => drives.forEach(f => y+f <= b ? total.push( y + f) : 0));

    return total.length === 0 ? -1 : Math.max(...total);

}
console.log(getMoneySpent([5, 1, 1],[2,3,5],20))
