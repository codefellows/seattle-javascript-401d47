'use strict';

// 3rd Party Resources
const express = require('express');

// our files imported
const authRouter = require('./auth/router');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

const PORT = process.env.PORT || 3002;

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(authRouter)

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log('server up on', PORT)),
}

