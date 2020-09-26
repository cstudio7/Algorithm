// const Joi = require('joi');
//
// const us = {
//     username: 'hau',
//     birth_year: 373737,
//     email: "jidiod@gmail.com"
// }
// const schema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),
//
//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
//
//     birth_year: Joi.number()
//         .integer().required()
//         .required(),
//
//
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }})
// })


//
// schema.validate(us);
// // -> { value: { username: 'abc', birth_year: 1994 } }
//
// schema.validate({});
// // -> { value: {}, error: '"username" is required' }
//
// // Also -
// const val = () => {
//     try {
//         const value = await Joi.validate(us,schema );
//         return value
//     }catch (err) {
//         console.log(err)
//     }
// };

// const valentine = () => {
//     const val = 50;
//     const er = val.toString()
//     if(val.toString().length > 1 || val === 50) console.log('we')
//     return 'happy'
// }
//
// console.log(valentine())


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



