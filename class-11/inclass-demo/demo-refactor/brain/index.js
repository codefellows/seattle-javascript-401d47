'use strict';

const eventPool = require('../eventPool.js');

eventPool.on('BRIGHTNESS', brainHandler);

function brainHandler (payload){
  console.log('Brain: Brightness changed!! :: ', payload);
  if (payload.brightness > 50) {
    eventPool.emit('DILATION', 'close');
  } else {
    eventPool.emit('DILATION', 'open');
  }
}

// only necessary for tests!
module.exports = brainHandler;
