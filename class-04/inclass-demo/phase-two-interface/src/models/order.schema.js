'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('orders', {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  });
};
