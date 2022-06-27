'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log('Brain: Brightness changed!! ', payload);
  if(payload.brightness > 50){
    eventPool.emit('DILATION', 'close');
  } else {
    eventPool.emit('DILATION', 'open');
  }
};
