'use strict';

const { Server } = require('socket.io');
const PORT = process.eventNames.PORT || 3002;
const Queue = require('./lib/queue');

// http://localhost:3002
const server = new Server(PORT);
const messages = server.of('/messages');
const messageQueue = new Queue();

messages.on('connection', (socket) => {
  console.log('joined the messages name space', socket.id);

  socket.onAny((event, payload) => {
    let time = new Date();
    console.log('EVENT:', {event, time, payload});
  });

  socket.on('JOIN', (queueId) => {
    socket.join(queueId);
    socket.emit('JOIN', queueId);
  });

  socket.on('MESSAGE', (payload) => {
    let currentQueue = messageQueue.read(payload.queueId);
    if (!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey)
    }
    currentQueue.store(payload.messageId, payload);
    messages.emit('MESSAGE', payload);
  });

  socket.on('RECEIVED', (payload) => {
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('no queue created for this message');
    }
    let message = currentQueue.remove(payload.messageId);
    messages.to(payload.queueId).emit('RECEIVED', message);
  });

  // expect this would work GREAT if we weren't just logging to the terminal AND we were persisting data in a DB ir our Server never shut off
  socket.on('GET-MESSAGES', (payload) => {
    console.log('does this even run');
    let currentQueue = messageQueue.read(payload.queueId);
    Object.keys(currentQueue.data).forEach(messageId => {
      messages.emit('MESSAGE', currentQueue.read(messageId));
    });
  });
});
