'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('---------BASE 64------------');

let string = 'Ryan pass 123';

let encoded = base64.encode(string);
let decoded = base64.decode(encoded);

console.log('string:', string);
console.log('encoded:', encoded);
console.log('decoded:', decoded);


console.log('---------HASHING with bcrypt------------');

let password  = 'pass123';
let complexity = 5;

encrypt(password, complexity)

async function encrypt(password, complexity){
  let hashedPassword = await bcrypt.hash(password, complexity)

  let exampleOne = '$2b$05$JK4YRqHuKdSIqYahTZXWEOgXyHOP5MzjiMkqL/Pf7oYm.vj.RDGGK';
  let exampleThree = '$2b$05$dMe66Oz6.Wh4zuHnjpisGeKFDy5mpPYo20tISa4fAAQ2ucw8OaomS'
  let exampleTwo = '$2b$05$JK4YRqHuKdSIq4ahTZXWEOgXyHOP5MzjiMkqL/Pf7oYm.vj.RDGGK';

  let isValidHashedPassword = await bcrypt.compare(password, hashedPassword);
  let isValidExampleOne = await bcrypt.compare(password, exampleOne);
  let isValidExampleTwo = await bcrypt.compare(password, exampleTwo);
  let isValidExampleThree = await bcrypt.compare(password, exampleThree);


  console.log('isValidHashedPassword:', isValidHashedPassword);
  console.log('isValidExampleOne:', isValidExampleOne);
  console.log('isValidExampleTwo:', isValidExampleTwo);
  console.log('isValidExampleThree:', isValidExampleThree);

}


