let proxy = new Proxy({}, {
    defineProperty(trapTarget, key, descriptor) {

        console.log(`key: ${key}`); // "proxy"
        console.log(`value: ${descriptor.value}`); // "proxy"
        console.log(`name: ${descriptor.name}`); // undefined

        return Reflect.defineProperty(trapTarget, key, descriptor);
    }
});

Object.defineProperty(proxy, "name", {
    name: "custom", // ignored
    value: "proxy",
    // only accept the follow properties
    // enumerable , configurable , value , writable , get , and set
});

console.log(proxy.name)

