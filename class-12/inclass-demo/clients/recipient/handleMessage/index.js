'use strict';

module.exports = (socket) => (payload) => {
  console.log('Message Read!', payload);
  socket.emit('RECEIVED', payload);
};
