'use strict';

const eventPool = require('../eventPool.js');
eventPool.on('DILATION', pupilHandler);

function pupilHandler(payload) {
  console.log('Pupils: Dilation Updated!', payload);
}

// only necessary for tests!
module.exports = pupilHandler;
