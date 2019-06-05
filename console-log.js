'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');
const upperCase = require('./uppercase.js');
const util = require('util');
const fs = require('fs');

const consoleThis = () => {
    console.log('Success!');
};
eventEmitter.on(eventNames.LOG, consoleThis);

module.exports = consoleThis;