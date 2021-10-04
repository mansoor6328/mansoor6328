// for
// foreach
// while
// dowhile

// Fastest loop
// For

// Heap Memory -> Highest Time to fetch data -> Machine
// Stack Memory -> Less time from Heap Memory -> Machine
// Chached Memory(temp Memory) -> Browser -> 5MB -> 8MB

// const arr = [...Array(1000000).keys()]

// console.time('for')
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd('for')

// console.time('while')
// let j = 0
// while (j < arr.length) {
//     j++
// }
// console.timeEnd('while')

// console.time('dowhile')
// let k = 0
// do {
//     k++
// } while (k < arr.length);
// console.timeEnd('dowhile')

// console.time('forEach')
// arr.forEach(element => {
// });
// console.timeEnd('forEach')

const a = {
    a: 1,
    b: 2,
    d: 5
}

// Dot Notation
console.log(a.b);

// Array Notation
const prop = 'b';
console.log(a[prop]);


// delete a.d

// 1000 records then it iterate 1000 times

// a.c = 4
// console.log(a);

// Iteration will take highest amount of time

// console.log(a);

// Muttable -> Change Original Object

// Immutable -> you cant change original object

// Mutably
// a.c = 3;

// console.log(a);

// Immutably
// ES5
const aa = Object.assign({}, a, { b: 4});

// ES6+
// Spread Operator
const aaa = {...a, b: 4}

// 64MB

console.log(a);
console.log(aaa);
console.log(aa);

// ES6+
// Destructuring
const { b, d } = a;
console.log(b);
console.log(d);


// All new Javascript Libraries are using Immutable way to manipulate data
// -> React
// -> View
// -> Sevlet

// for
// foreach
// while
// dowhile

// Fastest loop
// For

// Heap Memory -> Highest Time to fetch data -> Machine
// Stack Memory -> Less time from Heap Memory -> Machine
// Chached Memory(temp Memory) -> Browser -> 5MB -> 8MB

// const arr = [...Array(1000000).keys()]

// console.time('for')
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd('for')

// console.time('while')
// let j = 0
// while (j < arr.length) {
//     j++
// }
// console.timeEnd('while')

// console.time('dowhile')
// let k = 0
// do {
//     k++
// } while (k < arr.length);
// console.timeEnd('dowhile')

// console.time('forEach')
// arr.forEach(element => {
// });
// console.timeEnd('forEach')

// const a = {
//     a: 1,
//     b: 2,
//     d: 5
// }

// Dot Notation
// console.log(a.b);

// Array Notation
// const prop = 'b';
// console.log(a[prop]);


// delete a.d

// 1000 records then it iterate 1000 times

// a.c = 4
// console.log(a);

// Iteration will take highest amount of time

// console.log(a);

// Muttable -> Change Original Object

// Immutable -> you cant change original object

// Mutably
// a.c = 3;

// console.log(a);

// Immutably
// ES5
// const aa = Object.assign({}, a, { b: 4});

// ES6+
// Spread Operator
// const aaa = {b: 4,...a}

// 64MB

// console.log(a);
// console.log(aaa);
// console.log(aa);

// ES6+
// Destructuring
// const { b, d, a: data } = a;
// console.log(b);
// console.log(d);
// console.log(data);

// const { d ,b, ...rest } = a;
// console.log(rest);



// All new Javascript Libraries are using Immutable way to manipulate data
// -> React
// -> View
// -> Sevlet



// Algorithm complexity

// Big O Notation

// 1000 Users Records
// Check whether username Ram is available

// const Users = ['ram', 'lakshman', 'ravan', 'vibhishan', 'hanuman'];

// O(1) -> Best Complexity
// console.log(Users[2]);

// O(N) -> Nutral

// O(LogN) -> Scond best
// let isRavanExist = false;
// for (let i = 0; i < Users.length; i++) {
//     console.log(i);
//     if(Users[i] === 'ravan') {
//         isRavanExist = true;
//         break;
//     }
// }

// console.log(isRavanExist);


// O(N * logN)
// O(N^2)
// O(N**2)

// *
// **
// ***
// ****

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
// }

const arr = [1,2,3,4,5,6,7,8,9,10];


const newArr = [0, ...arr, 11];

console.log(newArr);

// LILO
// arr.push(11);
// console.log(arr);
// arr.pop();
// console.log(arr);

// FIFO
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// Reduce Loop(Array Mthod)

const arr = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  sum = sum + element;
}


const sum1 = arr.reduce((p, c) => p + c, 0);


const users = [
  {
    name: "yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "virat",
    age: 28,
    gender: "male",
  },
  {
    name: "rohit",
    age: 34,
    gender: "male",
  },
  {
    name: "alia",
    age: 19,
    gender: "female",
  },
  {
    name: "dipeela",
    age: 25,
    gender: "female",
  },
  {
    name: "priyanka",
    age: 38,
    gender: "female",
  },
];

// {
//     "0-9": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": [],
//     "40:49": []
// }

const obj = {};
// console.log(obj['male']);
obj['male'] = [];


const groupByGender = users.reduce((p , c) => {
    if(p[c.gender] === undefined) {
        p[c.gender] = [];
    }
    p[c.gender].push(c)
    return p;
}, {});

console.log(groupByGender);

// {
//      male: [],
//      female: []
// }

// findIndex
// find
// Filter
// some
// every
// map

const index = users.findIndex(x => x.name === 'asd');

console.log(index);

const index1 = users.reduce((p, c, i) => {
    if(c.name === 'asdfd') {
        return i;
    }
    return p
}, -1);

const femaleUsers = users.reduce((p,c) => {
    if(c.gender === 'female') {
        p.push(c);
    }
    return p;
}, [])

console.log(femaleUsers);

console.log(index1);
