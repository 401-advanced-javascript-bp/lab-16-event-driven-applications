'use strict';

//Becky - This is the main constructor for the event system
const EventEmitter = require('events');
//Becky - making a new instance based on the constructor
const eventEmitter = new EventEmitter(); 

module.exports = eventEmitter;