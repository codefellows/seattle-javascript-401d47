'use strict';


const handlePupils = require('./handlePupils');


describe('Handle Pupil Test', () => {
  console.log = jest.fn();
  test('log DILATION event to "close" pupils', () => {
    handlePupils('close');
    expect(console.log).toHaveBeenCalledWith('Pupils: Dilation Updated!', 'close');
  });
});
