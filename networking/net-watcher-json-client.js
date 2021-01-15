"use strict";

const net = require('net');
const client = net.connect({ port: 60300 });

client.on('data', (data) => {
    const message = JSON.parse(data);

    if (message.type === 'watching') {
        console.log("Now watching: " + message.file);
    } else if (message.type === 'changed') {
        let date = new Date(message.timestamp);
        console.log("File '" + message.file + "' changed at " + date);
    } else {
        throw Error("Unrecognized message type: " + message.type);
    }
});