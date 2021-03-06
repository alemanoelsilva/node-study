function toUint32(value) {
    return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}

function isArrayIndex(key) {
    let numericKey = toUint32(key);
    return String(numericKey) == key && numericKey < (Math.pow(2, 32) - 1);
}

class MyArray {
    constructor(length = 0) {

        this.length = length;

        return new Proxy(this, {
            set(trapTarget, key, value) {
                let currentLength = Reflect.get(trapTarget, "length");

                // the special case
                if (isArrayIndex(key)) {
                    let numericKey = Number(key);

                    if (numericKey >= currentLength) {
                        Reflect.set(trapTarget, "length", numericKey + 1);
                    }
                } else if (key === "length") {
                    if (value < currentLength) {
                        for (let index = currentLength - 1; index >= value; index--) {
                            Reflect.deleteProperty(trapTarget, index);
                        }
                    }
                }

                // always do this regardless of key type 
                return Reflect.set(trapTarget, key, value);
            }
        });
    }
}

let colors = new MyArray(3);
console.log(colors instanceof MyArray); // true 

console.log(colors.length); // 3

colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "black";

console.log(colors.length); // 4 

colors.length = 2;

console.log(colors.length); // 2 
console.log(colors[3]); // undefined 
console.log(colors[2]); // undefined 
console.log(colors[1]); // "green" 
console.log(colors[0]); // "red"