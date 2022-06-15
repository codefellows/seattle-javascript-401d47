'use strict';

const express = require('express');
const { PeopleModel } = require('../../collections');

const router = express.Router();


router.post('/people', async (req, res, next) => {
  let person = req.body;
  console.log(req.body);

  //query to the database
  let response = await PeopleModel.create(person);
  res.status(200).send(response);
});

module.exports = router;
