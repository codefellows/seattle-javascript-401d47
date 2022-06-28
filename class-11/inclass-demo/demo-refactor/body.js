'use strict';

const eventPool = require('./eventPool.js');
require('./brain');
require('./eyes');
require('./pupils');

eventPool.on('SUNLIGHT', (payload) => logEvent('SUNLIGHT', payload));
eventPool.on('BRIGHTNESS', (payload) => logEvent('BRIGHTNESS', payload));
eventPool.on('DILATION', (payload) => logEvent('DILATION', payload));


function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT', {event, time, payload});

}

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  console.log('Body:  brightness established');
  // 2 args:  eventName, payload
  eventPool.emit('SUNLIGHT', { brightness });
}, 3000);

