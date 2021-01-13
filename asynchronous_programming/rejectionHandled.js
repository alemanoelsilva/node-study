// rejectionHandled
console.log('\n\n**** rejectionHandled')
let rejectionHandled;

process.on("rejectionHandled", function (promise) {
    console.log('there is no handler to error')
    console.log(rejectionHandled === promise); // true 
});

rejectionHandled = Promise.reject(new Error("Explosion!"));

// wait to add the rejection handler 
setTimeout(function () {
    rejectionHandled.catch(function (value) {
        console.log(value.message); // "Explosion!" 
    });
}, 3000);

// add the handler to catch the error before the process.on
// rejectionHandled.catch(function (value) {
//     console.log('handling the rejection')
//     console.log(value.message); // "Explosion!" 
// });