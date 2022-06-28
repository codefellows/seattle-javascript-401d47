'use strict';

const Events = require('events');

const eventPool = new Events();

// eventPool.on()
// eventPool.emit()
module.exports = eventPool;
