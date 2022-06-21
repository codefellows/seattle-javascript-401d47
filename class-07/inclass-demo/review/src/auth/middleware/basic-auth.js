'use strict';

const base64 = require('base-64');
const { Users } = require('../models');



module.exports = async (req, res, next) => {
  if(!req.headers.authorization){
    res.status(401).send('Not Authorized');
  } else {
    let encodedAuthString = req.headers.authorization.split(' ').pop();
    let [ username, password ] = base64.decode(encodedAuthString).split(':');
    try {
      req.user = await Users.authenticateBasic(username, password);
      next()
    } catch(e){
      next('Invalid Login');
    }
  }
};
