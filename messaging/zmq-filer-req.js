"use strict";

const zmq = require('zeromq/v5-compat');
const filename = process.argv[2];
const requester = zmq.socket('req'); // create request endpoint

// handle replies from responder
requester.on("message", function (data) {
  let response = JSON.parse(data);
  console.log("Received response:", response);
});

requester.connect("tcp://localhost:5433");

console.log('Sending request for ' + filename); // send request for content
requester.send(JSON.stringify({
  path: filename
}));