let target = { name: "target" };

let proxy = new Proxy(target, {
    get(trapTarget, key, receiver) {

        // ignore existing properties so as not to affect them
        if (!(key in receiver)) {
            throw new TypeError(`Property ${key} does not exist.`);
        }

        // get the property
        return Reflect.get(trapTarget, key, receiver);
    }
});

// adding a property still works
proxy.name = "proxy";
console.log(proxy.name); // "proxy"

console.log(target.nme); // "undefined"
// nonexistent properties throw an error
console.log(proxy.nme); // throws an error