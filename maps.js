//
console.log('Maps')

const map = new Map()
map.set(5, 'hi')
map.set('5', 'holla')
map.set('50', 'ola que tal')

console.log(map.get(5))
console.log(map.get('5'))

console.log(map.size)
console.log(map.has(5))

console.log('Deleting "5"')
map.delete('5')
console.log(map.get('5')) // undefined

console.log(map.size)
console.log(map.has('5'))

console.log('Clearing all')
map.clear()
console.log(map.size)

console.log('\nInitialization')
const initMap = new Map([['key', 'value'], ['key_2', 'value_2']])
console.log(initMap.size)
console.log(initMap.get('key'))
console.log(initMap.get('key_2'))

console.log('\n\nforEach')
initMap.forEach((value, key, ownerMap) => {
    console.log(key + " " + value);
    console.log(ownerMap === initMap);
});

console.log('\nweakMaps')
const weakMap = new WeakMap()
let element = {
    function: 'document.querySelector(".element")'
}

weakMap.set(element, "Original");

const value = weakMap.get(element);
console.log('value', value); // "Original"

// remove the element
element = null;

weakMap.get(element) // the weak map is empty at this point