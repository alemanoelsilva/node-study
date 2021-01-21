"use strict";

const zmq = require('zeromq');
const sock = new zmq.Subscriber; // create subscriber endpoint

const TOPIC = 'topic test';


(async () => {
  sock.connect("tcp://localhost:5432"); // connect to publisher
  sock.subscribe(TOPIC)

  console.log("Subscriber connected to port 5432")

  for await (const [topic, buffer] of sock) {
    console.log('I received...', topic.toString());

    const message = JSON.parse(buffer);
    const date = new Date(message.timestamp);

    console.log("File '" + message.file + "' changed at " + date);
  }
})()



// subscriber.on('message', data => {
//   console.log('Listener connected...');
//   const message = JSON.parse(data);
//   const date = new Date(message.timestamp);

//   console.log("File '" + message.file + "' changed at " + date);
// });

  // for await (const [data] of subscriber) {
  //   const message = JSON.parse(data);
  //   const date = new Date(message.timestamp);

  //   console.log("File '" + message.file + "' changed at " + date);
  // }