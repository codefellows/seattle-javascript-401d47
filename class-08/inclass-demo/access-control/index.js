'use strict';

// in terminal run Node basicAuthStr.js to generate a basic auth string to send in headers via REST client (thunder client).  

let { start } = require('./src/server');
const { sequelize } = require('./src/models');

sequelize.sync()
  .then(() => console.log('successfully connected'))
  .catch((e) => console.error(e));

start();
