'use strict';

const handlePupils = require('./index.js');

describe('Testing the pupil handler', () => {

  console.log = jest.fn();

  test('Should log "open" for open payload' , () => {
    handlePupils('close');
    expect(console.log).toHaveBeenCalledWith('Pupils: Dilation Updated!', 'close');
  });
});

