'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get(){ // a method that gets called on read
        return jwt.sign({username: this.username}, SECRET, { expiresIn: '86400000'});
      }, 
      set(payload){  // a method that runs when set with "="
        return jwt.sign(payload, SECRET, { expiresIn: '86400000'});
      }, 
    },
  });

  user.authenticateBasic = async (username, password) =>{
    try {
      const user = await this.findOne({ where: { username } });
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return user;
      }
    } catch (e){
      console.error(e);
      return e;
    }
  };

  user.authenticateBearer = async (token) => {
    try {
      let payload = jwt.verify(token, SECRET);
      console.log(payload);
      const user = await this.findOne({ where: { username: payload.username } });
      if (user){
        return user;
      }
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  return user;
};
