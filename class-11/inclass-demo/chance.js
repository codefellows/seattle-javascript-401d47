'use strict';

const Chance = require('chance');
const chance = new Chance();

let person = {
  guid: chance.guid(),
  first: chance.first(),
  last: chance.last(),
  address: chance.address(),
}

console.log(person);
