'use strict';

const express = require('express');
const { orderInterface } = require('../models');

const router = express.Router();

// post
router.post('/order', async (req, res, next) => {
  let order = req.body;

  let response = await orderInterface.create(order);
  res.status(200).send(response);
});

// get
router.get('/order', async (req, res, next) => {
  let allOrders = await orderInterface.readAll();
  res.status(200).send(allOrders);
});

// get one
router.get('/order/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneOrder = await orderInterface.readOne(id);
  res.status(200).send(oneOrder);
});

// put - refactor needed
// router.put('/order/:id', async (req, res, next) => {
//   let { id } = req.params;

//   await orderModel.update(req.body, {where: { id }});
//   let updatedorder = await orderModel.findOne({where: { id }});
//   res.status(200).send(updatedorder);
// });

// delete -- refactor needed
// router.delete('/order/:id', async (req, res, next) => {
//   let { id } = req.params;
//   let deletedorder = await orderModel.findOne({where: { id }});

//   await orderModel.destroy({where: { id }});
//   res.status(200).send(deletedorder);
// });

module.exports = router;
