'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

//event registration
//think about it as app.use
const logger = require('./read.js');
const cache = require('./write.js');
const cache = require('./uppercase.js');

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
//new
// eventEmitter.emit('READ', file);


