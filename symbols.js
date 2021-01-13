
// Basic about Symbols
const firstname = Symbol('my first name')
const person = {
    [firstname]: 'Alex'
}

console.log('Basic about Symbols')
console.log(typeof firstname)
console.log(person)
console.log(person[firstname])

// Sharing Symbols
const uid = Symbol.for('uid')
const myObject = {
    [uid]: 12345,
}

const uid_2 = Symbol.for('uid') // serach for global symbol, if found, just returns, if not foung, create a new one
const uid_3 = Symbol('uid') // just create a new one

console.log('\n\nSharing Symbols')
console.log(myObject)
console.log(myObject[uid])

console.log(uid === uid_2)

console.log(Symbol.keyFor(uid))
console.log(Symbol.keyFor(uid_2))
console.log(Symbol.keyFor(uid_3)) // undefined because just Symbol does not create the symbol in a shared scope

// Retrieving Symbol properties
const symbols = Object.getOwnPropertySymbols(myObject)
console.log('\n\nRetrieving Symbol properties')
console.log(symbols.length)
console.log(symbols[0])
console.log(myObject[symbols[0]])

// Symbol well-known - hasInstance
console.log('\n\nSymbol hasInstance')
console.log(Array[Symbol.hasInstance]([]))
console.log([] instanceof Array)
console.log(Array[Symbol.hasInstance](null))
console.log(null instanceof Array)

// Symbol well-known - isConcatSpreadable
console.log('\n\nSymbol well-known -isConcatSpreadable')
const colletion = {
    0: 'hi',
    1: 'bye',
    length: 2,
    [Symbol.isConcatSpreadable]: true // make the object spreadable to array
}

const colletion_2 = {
    hi: 'hi',
    bye: 'bye',
    length: 2,
    [Symbol.isConcatSpreadable]: true // the properties name need to have numbers, as 0, 1
}

console.log(['I say'].concat(colletion))
console.log(['I say'].concat(colletion_2))

// Symbol well-known - match - replace - search and split
console.log('\n\nSymbol well-known - match - replace - search and split')

let hasLengthOf10 = {
    [Symbol.match]: function(value) {
        return value.length === 10 ? [value.substring(0, 10)] : null;
    },
    [Symbol.replace]: function(value, replacement) {
        return value.length === 10 ? replacement + value.substring(10) : value;
    },
    [Symbol.search]: function(value) {
        return value.length === 10 ? 0 : -1;
    },
    [Symbol.split]: function(value) {
        return value.length === 10 ? ["", ""] : [value];
    }
}


const message_1 = 'Hello World' // 11 characters
const message_2 = 'Hello John' // 10 characters

const match_1 = message_1.match(hasLengthOf10)
const match_2 = message_2.match(hasLengthOf10)

console.log('>>Match')
console.log(match_1)
console.log(match_2)

const replace_1 = message_1.replace(hasLengthOf10)
const replace_2 = message_2.replace(hasLengthOf10)

console.log('>>Replace')
console.log(replace_1)
console.log(replace_2)

const search_1 = message_1.search(hasLengthOf10)
const search_2 = message_2.search(hasLengthOf10)

console.log('>>Search')
console.log(search_1)
console.log(search_2)

const split_1 = message_1.split(hasLengthOf10)
const split_2 = message_2.split(hasLengthOf10)

console.log('>>Split')
console.log(split_1)
console.log(split_2)

// Symbol well-known - toPrimitive
console.log('\n\nSymbol well-known - toPrimitive')

function Temperature(degrees) {
    this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint) {
    switch (hint) { // hint has the typeof value
        case "string": return this.degrees + "\u00b0"; // degrees symbol
        case "number": return this.degrees;
        case "default": return this.degrees + " degrees";
    }
};

const freezing = new Temperature(32);
console.log(String(freezing)); // "32 °" >> string mode
console.log(freezing + "!"); // "32 degrees!" >> default mode
console.log(freezing / 2); // 16 >> number mode

// Symbol well-known - toStringTag
console.log('\n\nSymbol well-known - toStringTag')

function Person(name) { this.name = name }
function Dog(name) { this.name = name }

Person.prototype[Symbol.toStringTag] = 'Person'

const me = new Person('Alex')
const samoyedo = new Dog('Nina')

console.log(Object.prototype.toString.call(me)) // custom [object Person]
console.log(Object.prototype.toString.call(samoyedo)) // default [object Object]