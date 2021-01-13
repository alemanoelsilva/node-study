let target = { name: "target", value: 42 };

let proxy = new Proxy(target, {
    has(trapTarget, key) {

        if (['value', 'toString'].some(opt => opt === key)) {
            return false;
        } else {
            return Reflect.has(trapTarget, key);
        }
    }
});

console.log("value" in proxy); // false
console.log("name" in proxy); // true
console.log("toString" in proxy); // false

console.log("toString" in target); // true
