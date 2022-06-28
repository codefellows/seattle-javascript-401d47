'use strict';

const  { io }  = require('socket.io-client');

const socket = io('http://localhost:3002/light-reactivity');

const celestialBody = 'sun';

socket.emit('JOIN', celestialBody);

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  console.log('Weather: brightness established', brightness);

  socket.emit('SUNLIGHT', { brightness });
}, 2000);
