'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const util = require('util');
const fs = require('fs');

//keep
const handleRead = (payload) => {
    const read = util.promisify(fs.readFile);
    read(payload).then((read) => {
    eventEmitter.emit(eventNames.UPPERCASE, payload);
    }).catch((error) => {
        console.log(error);
    });
 
});
//keep
eventEmitter.on(eventNames.READ, handleRead);

// const stat = util.promisify(fs.stat);
// stat('.').then((stats) => {
//   // Do something with `stats`
// }).catch((error) => {
//   // Handle the error.
// });