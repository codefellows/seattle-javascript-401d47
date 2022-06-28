'use strict';

const eventPool = require('../eventPool.js');

eventPool.on('SUNLIGHT', eyeHandler);

function eyeHandler (payload){
  console.log(`Eyes:', 'We see brightness of ${payload.brightness}`);
  eventPool.emit('BRIGHTNESS', payload);
}

// only necessary for tests!
module.exports = eyeHandler;
