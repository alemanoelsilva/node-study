'use strict';

const fs = require('fs');
const zmq = require("zeromq")
const sock = new zmq.Publisher
const filename = process.argv[2];

const TOPIC = 'topic test'

fs.watch(filename, () => {

  // send message to any subscribers
  console.log('message sent')
  sock.send([
    TOPIC,
    JSON.stringify({
      type: 'changed',
      file: filename,
      timestamp: Date.now()
    })
  ]);

});


(async () => {
  await sock.bind('tcp://*:5432')
  console.log('Listening for zmq subscribers...');
})()
