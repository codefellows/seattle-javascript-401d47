'use strict';

const handleEyes = require('./handleEyes');
const eventPool = require('../eventPool');

// 2 params: 
// 1. path to the module mock, 
// 2. callback that returns an object, because the eventPool is an object (with 2 methods);
jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('Eye Module Test', () => {
  test('Emit the BRIGHTNESS event', () => {
    handleEyes({brightness: 50});
    expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', {brightness: 50})
  })
})
