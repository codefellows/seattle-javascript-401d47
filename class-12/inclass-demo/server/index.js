'use strict';

const { Server }  = require('socket.io');

const PORT = process.env.PORT || 3002;

// instance of a listening Event Server at http://localhost:3002
const server = new Server(PORT);

// create a namespace "off of" our server
// same url, just at an endpoint:  http://localhost:3002/light-reactivity
const lightReactivity = server.of('/light-reactivity');

server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event ', payload);
    // socket.emit('MESSAGE', payload); // send this to the same socket that emitted
    // server.emit('MESSAGE', payload);  //send to all connected sockets
    socket.broadcast.emit('MESSAGE', payload); // send to all sockets except sender
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event ', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});

// specific namespace
lightReactivity.on('connection', (socket) => {
  console.log('Connection to the lightReactivity namespace', socket.id );

  // how to join a room
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room!`);
    socket.join(room);
  });

  // managing the SUNLIGHT EVENT.  
  // creates the SUNLIGHT "hub"
  // listens for and logs events 
  // relays any message IF someone is subscribed and listening
  socket.on('SUNLIGHT', (payload) => {
    logEvent('SUNLIGHT', payload);
    lightReactivity.emit('SUNLIGHT', payload);
  });
});


function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}
