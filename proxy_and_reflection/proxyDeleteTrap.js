let target = { name: "target", value: 42 };

let proxy = new Proxy(target, {
    deleteProperty(trapTarget, key) {

        if (['value', 'toString'].some(opt => opt === key)) {
            return false;
        } else {
            return Reflect.deleteProperty(trapTarget, key);
        }
    }
});

// attempt to delete proxy.value
console.log("value" in proxy); // true
let result1 = delete proxy.value;
console.log('result1', result1); // false
console.log("value" in proxy); // true

// attempt to delete proxy.name
console.log("name" in proxy); // true
let result2 = delete proxy.name;
console.log('result2', result2); // true
console.log("name" in proxy); // false
