'use strict';

const MessageClient = require('./lib/messageClient');
const recipient = new MessageClient('messages');

// don't stress about this - system not 100% configured...yet
recipient.publish('GET_MESSAGES', { queueId: 'messages'});

recipient.subscribe('MESSAGE', (payload) => {
  console.log('received message', payload);
  recipient.publish('RECEIVED', payload);
});

