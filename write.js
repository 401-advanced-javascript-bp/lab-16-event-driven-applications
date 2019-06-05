'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');
const upperCase = require('./uppercase.js');
const consoleThis = require('./console-log.js');
const util = require('util');
const fs = require('fs');

//in process
const handleWrite = (upperCaseString) => {
    //validate inpute (please validate if you can)
    const write = util.promisify(fs.writeFile);
    //hardcode
    write('./readthis.txt', Buffer.from(upperCaseString)).then((write) => { //need to verify
    eventEmitter.emit(eventNames.LOG, consoleThis);
    }).catch((error) => {
        console.log(error);
    });
};

//in process
eventEmitter.on(eventNames.WRITE, handleWrite);

module.exports = { handleWrite };