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
// send request for content
for (let i = 1; i <= 3; i++) {
  console.log('Sending request ' + i + ' for ' + filename);
  requester.send(JSON.stringify({
    path: filename
  }));
}