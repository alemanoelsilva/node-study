let target = { name: "target", value: 42 };

let proxy = new Proxy(target, {
    isExtensible(trapTarget) {
        return Reflect.isExtensible(trapTarget);
    },
    preventExtensions(trapTarget) {
        return Reflect.preventExtensions(trapTarget);
    }
});

console.log(Object.isExtensible(target)); // true
console.log(Object.isExtensible(proxy)); // true

Object.preventExtensions(proxy);
console.log(Object.isExtensible(target)); // false
console.log(Object.isExtensible(proxy)); // false