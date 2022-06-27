'use strict';

const Event = require('events');
const eventPool = new Event();

// eventPool.on();
// eventPool.emit();
module.exports = eventPool;
