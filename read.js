'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');
// const readThis = require('./readthis.txt');

const util = require('util');
const fs = require('fs');

//keep
const handleRead = (fileName) => {
    console.log('handleRead');
    const read = util.promisify(fs.readFile);

    read(fileName).then((fileContents) => {
        eventEmitter.emit(eventNames.UPPERCASE, fileContents);
    }).catch((error) => {
        console.log(error);
    });
 
};
//keep
eventEmitter.on(eventNames.READ, handleRead);


module.exports = { handleRead };