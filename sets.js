//
console.log('Sets')

const set = new Set()
set.add(5)
set.add("5")

console.log(set.size)

const setObject = new Set()

const key_1 = {}
const key_2 = {}

setObject.add(key_1)
setObject.add(key_2)

console.log(setObject.size) // Set converts the key to string, so key_1 and key_2 will have the same string representation [oject Object]

const initSet = new Set([1, 2, 3, 4, 5, 5, 5, 6]) // set deduplicates
console.log(initSet.size)

console.log('has method')
console.log(initSet.has(1))
console.log(initSet.has(10))

console.log('deleting 5')
initSet.delete(5)
console.log(initSet.size)

console.log('clearing all')
initSet.clear()
console.log(initSet.size)

console.log('\n\nForeach')

const forEachSet = new Set([1, 2]);
forEachSet.forEach((value, key, ownerSet) => { // like usual forEach
    console.log(key + " " + value);
    console.log(ownerSet === forEachSet);
});

console.log('Array to Set')
const array = [1, 2, 3, 4]
const arrSet = new Set(array)
console.log(arrSet.size) // 4

console.log('\nSet to Array')
const newArr = [...arrSet]
console.log(newArr.length) // 4

console.log('\n\nWeakSet')
const weakSet = new WeakSet()
let keyObj = {}

weakSet.add(keyObj)

try {
    weakSet.add(1) // throw an error
} catch (error) { 
    console.log(error.message)
}

console.log(weakSet.has(keyObj))

keyObj = null
console.log(weakSet) // WeakSet { <items unknown> }
console.log(weakSet.has(keyObj)) // false
