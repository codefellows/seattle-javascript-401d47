'use strict';

const MessageClient = require('./lib/messageClient');
const Chance = require('chance');
const chance = new Chance();
const messenger = new MessageClient('messages');

setInterval(() => {
  let name = chance.first();
  console.log('new message sent to', name);
  messenger.publish('MESSAGE', { messageId: chance.guid(), text: `Hi ${name}`});
}, 3000);

messenger.subscribe('RECEIVED', (payload) => {
  console.log(`confirmed "${payload.text}" message received`)
})
