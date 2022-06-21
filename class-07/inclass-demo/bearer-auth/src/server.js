'use strict';

// 3rd party rss
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');

// instantiate express with Singleton
const app = express();

const PORT = process.env.PORT || 3002;
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'sqlite:memory';  // one colon allows us to persist

const sequelize = new Sequelize(DATABASE_URL);


// add json to request body
app.use(express.json());

// Process FORM input and add to request body
app.use(express.urlencoded({ extended: true }));

// Create a Sequelize Model
const UsersModel = sequelize.define('Users', {
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
      return jwt.sign({username: this.username}, SECRET, { expiresIn: '86400000'})
    }, 
    set(payload){  // a method that runs when set with "="
      return jwt.sign(payload, SECRET, { expiresIn: '86400000'})
    }, 
  }
})

// can attach a  method to UsersModel
UsersModel.beforeCreate = (user) => {
  console.log(user)
}

UsersModel.authenticateBearer = async (token) => {
  try {
    let payload = jwt.verify(token, SECRET);
    console.log(payload);
    const user = await UsersModel.findOne({ where: { username: payload.username } });
    if (user){
      return user
    }
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function basicAuth(req, res, next) {
  // confirm that the headers has an "authorization" property
  let { authorization } = req.headers;
  console.log(authorization) //Basic dGVzdGVyOnBhc3MxMjM=
  if (!authorization) {
    res.status(401).send('Not Authorized');
  } else {
    // get rid of 'Basic '
    let authStr = authorization.split(' ')[1];
    console.log('authStr:', authStr); // asfjdgbklvasv

    let decodedAuthStr = base64.decode(authStr);
    console.log('decodedAuthStr:', decodedAuthStr); //tester:pass123

    let [username, password] = decodedAuthStr.split(':');
    console.log('username:', username);
    console.log('password:', password);

    let user = await UsersModel.findOne({ where: { username } });

    if (user) {
      let validUser = await bcrypt.compare(password, user.password);
      if (validUser) {
        // previously req.user did not exist.  
        // if user is authenticated, let add it
        req.user = user
        next()
      } else {
        next('Not Authorized');
      }
    }
  }
}

async function bearerAuth(req, res, next) {
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {
    try {
      let token = req.headers.authorization.split(' ').pop();

      let validUser = UsersModel.authenticateBearer(token);
      if (validUser) {
        req.user = validUser;
        next();
      }
    } catch (e) {
      next('e.message');
    }
  }
}

app.post('/signup', async (req, res, next) => {
  let { username, password } = req.body;

  let encryptedPassword = await bcrypt.hash(password, 5);

  let user = await UsersModel.create({
    username,
    password: encryptedPassword
  });
  res.status(200).send(user)
})

app.get('/hello', basicAuth, (req, res, next) => {
  let { name } = req.query;
  console.log('auth proof', req.user.username)
  res.status(200).send(`Greetings ${name}! this route is now secured by Basic AUth!!!`)
});

app.get('/users', bearerAuth, async (req, res, next) => {
  console.log('in users', req.user);
  let users = await UsersModel.findAll({})
  let payload = {
    results: users,
    token: req.user.token
  };
  res.status(200).send(payload);
})

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('server running on', PORT)),
  sequelize,
  UsersModel
}
