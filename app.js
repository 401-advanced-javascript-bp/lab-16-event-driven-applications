'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

//event registration
//think about it as app.use
const reader = require('./read.js');
const write = require('./write.js');
const upperCase = require('./uppercase.js');

const fs = require('fs');
let file = process.argv.slice(2).shift();

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
    
//     let text = data.toString().toUpperCase();
    
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };
eventEmitter.emit(eventNames.READ, file);

// eventEmitter.emit(eventNames.UPPERCASE, fileContents);

// alterFile(file); //when do we call?
//new
// eventEmitter.emit('READ', file);


