'use strict';


const handleBrain = require('./handleBrain');
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

describe('Handle Brain Test', () => {

  console.log = jest.fn();
  // another way:  jest.spyOn(console, 'log');

  test('log and emit DILATION event to "close" pupils', () => {
    handleBrain({brightness: 55});
    expect(console.log).toHaveBeenCalledWith('Brain: Brightness changed!! ', {brightness: 55});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'close');
  });
  test('log and emit DILATION event to "open" pupils', () => {
    handleBrain({brightness: 45});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'open');

  })

});
