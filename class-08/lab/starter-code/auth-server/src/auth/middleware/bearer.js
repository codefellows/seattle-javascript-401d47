'use strict';

const { users } = require('../models')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login: no auth header') }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    next(`Invalid Login: ${e.message}`);
  }

}
