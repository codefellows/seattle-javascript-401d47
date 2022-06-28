'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');

// one one to curry...
// const handleMessage = require('./handleMessage')(socket);

// another way to curry...
const createHandleMessage = require('./handleMessage');
const handleMessage = createHandleMessage(socket);


socket.on('MESSAGE', handleMessage);
