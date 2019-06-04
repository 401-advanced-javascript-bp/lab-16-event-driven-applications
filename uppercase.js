'use strict';

//Becky - this file listens for events
const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');
const util = require('util');
const fs = require('fs');

eventEmitter.on(eventNames.UPPERCASE, handleUpperCase);

// const read = () => {
// fs.readFile( file, (err, data) => {
//   if(err) { throw err; }
//     // let text = data.toString().toUpperCase();
//       // fs.writeFile( file, Buffer.from(text), (err, data) => {
//       //   if(err) { throw err; }
//       //   console.log(`${file} saved`);
//       // });
//     // write();// emit
//     eventEmitter.emit('writeUpperCase');
//     })
// },

//keep
const handleUpperCase = (payload) => {
    payload.data = data.toString().toUpperCase();
    eventEmitter.emit(eventNames.WRITE, payload);
},

// const write = () => {
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//      if(err) { throw err; }
//       console.log(`${file} saved`);
//         });
//     },

module.exports = handleUpperCase;