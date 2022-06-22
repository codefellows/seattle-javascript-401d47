'use strict';

// in terminal run Node bearerAuthStr.js to generate a bearer auth string to send in headers via REST client (thunder client).  

const jwt = require('jsonwebtoken');
const SECRET = process.env.API_SECRET || 'thisIsMySecret';

let user = {
  username: 'testy',
  password: 'pass123'
};

function generateToken(userToHash){
  return jwt.sign(userToHash, SECRET, { expiresIn: '86400000'});
}

let token = generateToken(user)
console.log('AuthString: ', `Bearer ${token}`);
