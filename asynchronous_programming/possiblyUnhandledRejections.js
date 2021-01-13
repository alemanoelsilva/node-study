let possiblyUnhandledRejections = new Map();

// when a rejection is unhandled, add it to the map 
process.on("unhandledRejection", function (reason, promise) {
    possiblyUnhandledRejections.set(promise, reason);
});

process.on("rejectionHandled", function (promise) {
    possiblyUnhandledRejections.delete(promise);
});

setInterval(function () {
    possiblyUnhandledRejections.forEach(function (reason, promise) {
        console.log(reason.message ? reason.message : reason);
        // do something to handle these rejections
        handleRejection(promise, reason);
    });

    possiblyUnhandledRejections.clear();
}, 60000);