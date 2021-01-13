let proxy = new Proxy({}, {
    defineProperty(trapTarget, key, descriptor) {

        // it does not allow property with symbol
        if (typeof key === "symbol") {
            return false;
        }

        return Reflect.defineProperty(trapTarget, key, descriptor);
    }
});

Object.defineProperty(proxy, "name", {
    value: "proxy"
});

console.log(proxy.name); // "proxy"

let nameSymbol = Symbol("name"); // throws an error
Object.defineProperty(proxy, nameSymbol, {
    value: "proxy"
 });