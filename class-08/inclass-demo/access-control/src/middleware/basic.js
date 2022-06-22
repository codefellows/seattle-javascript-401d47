'use strict';

const base64 = require('base-64');
const { Users } = require('../models');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next('Not Authorized');
  } else {
    // get rid of 'Basic '
    let authStr = req.headers.authorization.split(' ')[1];
    let decodedAuthStr = base64.decode(authStr);
    let [username, password] = decodedAuthStr.split(':');

    let user = await Users.authenticateBasic(username, password);

    if (user) {
      req.user = user;
      next();
    } else {
      next('Not Authorized');
    }
  }
};
