'use strict';

const { Sequelize, DataTypes} = require('sequelize');
const UsersModel = require('./users');

// need to address this for deployment!
const sequelize = new Sequelize('sqlite::memory');

module.exports = {
  sequelize,
  Users: UsersModel(sequelize, DataTypes)
}
