'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { Users } = require('./models');
const basicAuth = require('./middleware/basic-auth');


router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});


router.post('/signin', basicAuth, async (req, res) => {

  res.status(200).json(req.user);
});

module.exports = router;
