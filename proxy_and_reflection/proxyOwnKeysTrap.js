let proxy = new Proxy({}, {
    ownKeys(trapTarget) {
        return Reflect.ownKeys(trapTarget).filter(key => {
            return typeof key !== "string" || key[0] !== "_";
        });
    }
});

let nameSymbol = Symbol("name");
proxy.name = "proxy";
proxy._name = "private";
proxy[nameSymbol] = "symbol";

let names = Object.getOwnPropertyNames(proxy),
    keys = Object.keys(proxy),
    symbols = Object.getOwnPropertySymbols(proxy);


console.log(names.length); // 1
console.log(names[0]); // "proxy"
console.log(keys.length); // 1
console.log(keys[0]); // "proxy"
console.log(symbols.length); // 1
console.log(symbols[0]); // "Symbol(name)"