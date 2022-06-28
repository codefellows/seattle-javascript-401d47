'use strict';

const handleEyes = require('./index.js');
const eventPool = require('../eventPool.js');

// path to the module to mock
jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('testing the brain module', () => {

  test('Emits the BRIGHTNESS event', () => {
    handleEyes({ brightness: 50 });
    expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', { brightness: 50 });
  });
});
