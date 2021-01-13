// unSettled Promise
console.log('**** unSettled Promise')

const unSettled = new Promise(function (resolve, reject) { // goes to the back of job queue
    console.log("unSettled");
    resolve('1');
});

unSettled.then(function (a) {
    console.log("Resolved.", a);
});

console.log("Hi unSettled!");

// settled Promise
console.log('\n\n**** settled Promise')

const settled = Promise.resolve(42); // does not go to the back of job queue

settled.then(function (value) {
    console.log('settled', value);   // 42
});

console.log("Hi settled!");


