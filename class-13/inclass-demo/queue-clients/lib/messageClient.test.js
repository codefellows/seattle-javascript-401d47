'use strict';

const MessageClient = require('./messageClient');
const { io } = require('socket.io-client');

jest.mock('socket.io-client', () => {
  return {
    io: jest.fn(() => {
      return {
        on: jest.fn(),
        emit: jest.fn(),
      };
    }),
  };
});

describe('Client Test', () => {
  test('Call socket function on instantiation', () => {
    jest.clearAllMocks();
    let client = new MessageClient('test');
    expect(io).toHaveBeenCalledWith('http://localhost:3002/messages');
    expect(client.socket.emit).toHaveBeenCalledWith('JOIN', {queueId: 'test'});
    expect(client.socket.on).toHaveBeenCalled();
  });
});
