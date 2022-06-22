'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'sqlite:memory';  // one colon allows us to persist

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  sequelize,
  Users: userSchema(sequelize, DataTypes),
};
