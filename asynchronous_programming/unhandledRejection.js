// unhandledRejection
console.log('\n\n**** unhandledRejection')

let unhandledRejection;

process.on("unhandledRejection", function (reason, promise) {
    console.log(reason.message); // "Explosion!" 
    console.log(unhandledRejection === promise); // true 
});

unhandledRejection = Promise.reject(new Error("Explosion!"));