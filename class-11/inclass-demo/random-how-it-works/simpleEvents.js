'use strict';

const Event = require('events');

// event singleton
const eventPool = new Event();  

//  client list
function ryansPhone(){
  console.log('sending message');
  // .emit args:  eventName(as a string), payload
  eventPool.emit('SEND_MESSAGE', {
    text: 'You\'ve Got This!',
  })
}

function andrewsPhone(payload){
  console.log('Andrew received the message', payload);
  // Andrew could TOTALLY emit.  either same eventPool or a different one
}

function marcussPhone(payload){
  console.log('Marcus received the message', payload);
    // Marcus could TOTALLY emit.  either same eventPool or a different one
}

// clients subscribing to the event transmission
eventPool.on('SEND_MESSAGE', andrewsPhone);
eventPool.on('SEND_MESSAGE', marcussPhone);

// use setInterval to mimic passage of time to make event feel more "real"
setInterval(() => {
  ryansPhone();
}, 2000);
