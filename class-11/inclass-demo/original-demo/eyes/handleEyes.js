'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`Eyes: We see brightness of, ${payload.brightness}` );
  eventPool.emit('BRIGHTNESS', payload)
}
