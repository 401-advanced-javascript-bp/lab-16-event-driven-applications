'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');
const util = require('util');
const fs = require('fs');

//in process
const handleWrite = (payload) => {
    //validate inpute (please validate if you can)
    const write = util.promisify(fs.writeFile);
    write(payload, Buffer.from(text)).then((write) => { //need to verify
    eventEmitter.emit(LOG, payload);
    }).catch((error) => {
        console.log(error);
    });
});

// const write = () => {
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//      if(err) { throw err; }
//       console.log(`${file} saved`);
//         });
//     },

//in process
eventEmitter.on(eventNames.WRITE, handleWrite);