'use strict';

// note:  CustomerModel only necessary if we going to seed our Database
const { sequelize, CustomerModel } = require('./src/models');
const server = require('./src/server');

// create all associated tables and make sure connection is good
sequelize.sync()
  .then(() => {
    console.log('Successful Connection!!!');
    // if you want to seed, be careful - this will happen every time you start your server
    // CustomerModel.create({name: 'Ryan'});
  })
  .catch(err => console.error(err));


server.start();
