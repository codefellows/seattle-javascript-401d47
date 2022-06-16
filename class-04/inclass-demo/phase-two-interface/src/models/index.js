'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const modelInterface = require('./modelInterface');
const customerSchema = require('./customer.schema');
const orderSchema = require('./order.schema');

// if password necessary:  postgres://user:password@localhost:5432/401d46-api-app
// ternary:  WTF
const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/401d47-api-app';

const sequelize = new Sequelize(DATABASE_URL); 

// all the models could be created adn exported in THIS file!
// create Customer Model
const CustomerModel = customerSchema(sequelize, DataTypes);
const OrderModel = orderSchema(sequelize, DataTypes);

// create our associations between tables
CustomerModel.hasMany(OrderModel, {foreignKey: 'customerId', sourceKey: 'id'});
OrderModel.belongsTo(CustomerModel, {foreignKey: 'customerId', targetKey: 'id'});

module.exports = {
  sequelize,
  customerInterface: new modelInterface(CustomerModel),
  orderInterface: new modelInterface(OrderModel),
};
