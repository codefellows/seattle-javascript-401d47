'use strict';

let { start, sequelize} = require('./src/server');

sequelize.sync()
  .then(() => console.log('successfully connected'))
  .catch((e) => console.error(e));

start();
