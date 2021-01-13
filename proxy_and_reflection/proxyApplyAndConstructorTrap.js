const target = function () { return 42 };

const proxy = new Proxy(target, {
    apply: function (trapTarget, thisArg, argumentList) {
        return Reflect.apply(trapTarget, thisArg, argumentList);
    },

    construct: function (trapTarget, argumentList) {
        return Reflect.construct(trapTarget, argumentList);
    },
});

// a proxy with a function as its target looks like a function
console.log(typeof proxy); // "function"

console.log(proxy()); // 42

var instance = new proxy();
console.log(instance instanceof proxy); // true
console.log(instance instanceof target); // true

