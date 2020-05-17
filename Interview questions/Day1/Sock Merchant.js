// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are


//Javascript solution

function sockMerchant(n, ar) {
    let storage = {};
    let pairs = 0;

    for (var i = 0; i < n; i++) {
        storage[ar[i]] = !storage[ar[i]];
        if (!storage[ar[i]]) pairs++;
    }

    return pairs;
}

//We have an object, storage, that adds a key for every sock color found.
// If the sock doesn't exist in storage, it is falsy (undefined),
// so we set it to true. Every even number of socks sets storage[sock] to false.
// So, as long as we count the number of times a value is false AFTER we change the boolean value,
// it will give us the total number of pairs.

// Practice
const storage = {
    we:'yes',
    now: 'no',
    20:'you say true'

}
const we = () => {
    storage[5] = storage[5]
    console.log(storage)
}
console.log(we())
// the object storage[20] = !storage['we'] adds true or false to the storage object
//  storage[5] = !storage[5] gives  a true,
//  the reason is that storage[5] on the RHS without ! gives undefined and the reverse(!) is truthy
// while storage[20] = !storage[20] gives a false,
// the reason is that storage[20] on the RHS exist and will be used but using ! makes it a falsy value
