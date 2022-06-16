'use strict';

const express = require('express');
const { CustomerModel } = require('../models');

const router = express.Router();

// post
router.post('/customer', async (req, res, next) => {
  let customer = req.body;
  console.log(req.body);

  //query to the database
  let response = await CustomerModel.create(customer);
  res.status(200).send(response);
});

// get
router.get('/customer', async (req, res, next) => {
  let allCustomers = await CustomerModel.findAll();
  res.status(200).send(allCustomers);
});

// get one
router.get('/customer/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneCustomer = await CustomerModel.findOne({where: { id }});
  res.status(200).send(oneCustomer);
});

// put
router.put('/customer/:id', async (req, res, next) => {
  let { id } = req.params;

  await CustomerModel.update(req.body, {where: { id }});
  let updatedCustomer = await CustomerModel.findOne({where: { id }});
  res.status(200).send(updatedCustomer);
});

// delete
router.delete('/customer/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedCustomer = await CustomerModel.findOne({where: { id }});

  await CustomerModel.destroy({where: { id }});
  res.status(200).send(deletedCustomer);
});

module.exports = router;
