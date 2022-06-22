'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: { 
      type: DataTypes.ENUM,
      values: ['user', 'writer', 'editor', 'admin'], 
      defaultValue: 'user', 
    },
    token: {
      type: DataTypes.VIRTUAL,
      get(){ // a method that gets called on read
        return jwt.sign({username: this.username}, SECRET);
      }, 
      set(payload){  // a method that runs when set with "="
        return jwt.sign(payload, SECRET);
      }, 
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ['read'],
          writer: ['read', 'create'],
          editor: ['read', 'create', 'update'],
          admin: ['read', 'create', 'update', 'delete'],
        };
        return acl[this.role];
      },
    },
  });

  users.authenticateBasic = async function(username, password){
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

  users.authenticateBearer = async function(token){
    try {
      let payload = jwt.verify(token, SECRET);
      console.log(payload);
      const user = await this.findOne({where: { username: payload.username }});
      if (user){
        return user;
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return users;
};
