'use strict';

const Chance = require('chance');
const chance = new Chance();

const { io } = require('socket.io-client');
// acknowledge a connection, no subscriptions have occurred yet
const socket = io('http://localhost:3002');

const createSendMessage = require('./sendMessage');
const handleReceived = require('./handleReceived');
const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);

setInterval(() => {
  sendMessage(`Hi ${chance.first()}`);
}, 3000);
