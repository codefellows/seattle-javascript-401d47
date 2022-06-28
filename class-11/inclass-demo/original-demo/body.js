'use strict';

const eventPool = require('./eventPool');
const eyeHandler = require('./eyes/handleEyes.js');
const brainHandler = require('./brain/handleBrain.js');
const pupilHandler = require('./pupils/handlePupils.js');

eventPool.on('SUNLIGHT', eyeHandler);
eventPool.on('BRIGHTNESS', brainHandler);
eventPool.on('DILATION', pupilHandler);

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  console.log('Body:  brightness established');
  // 2 args:  eventName, payload
  eventPool.emit('SUNLIGHT', { brightness })
}, 3000);
