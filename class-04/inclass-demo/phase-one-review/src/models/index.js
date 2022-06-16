'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const customerSchema = require('./customer.schema');

// if password necessary:  postgres://user:password@localhost:5432/401d46-api-app
// ternary:  WTF
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/401d47-api-app';

const sequelize = new Sequelize(DATABASE_URL); 

// all the models could be created adn exported in THIS file!
// create Customer Model
const CustomerModel = customerSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  CustomerModel,
  
};
