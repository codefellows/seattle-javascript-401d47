'use strict';

const express = require('express');
const { customerInterface, orderInterface } = require('../models');

const router = express.Router();

// post
router.post('/customer', async (req, res, next) => {
  let customer = req.body;
  console.log(req.body);

  let response = await customerInterface.create(customer);
  res.status(200).send(response);
});

// get
router.get('/customer', async (req, res, next) => {
  let allCustomers = await customerInterface.readAll();
  res.status(200).send(allCustomers);
});

// get one
router.get('/customer/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneCustomer = await customerInterface.readOne(id);
  res.status(200).send(oneCustomer);
});

// get one with relations
router.get('/customerWithOrders/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneCustomer = await customerInterface.readWithRelations(id, {include: orderInterface.model});
  res.status(200).send(oneCustomer);
});

// put -- need refactor
// router.put('/customer/:id', async (req, res, next) => {
//   let { id } = req.params;

//   await CustomerModel.update(req.body, {where: { id }});
//   let updatedCustomer = await CustomerModel.findOne({where: { id }});
//   res.status(200).send(updatedCustomer);
// });

// delete -- need refactor
router.delete('/customer/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedCustomer = await customerInterface.delete(id);
  res.status(200).send(deletedCustomer);
});

module.exports = router;
