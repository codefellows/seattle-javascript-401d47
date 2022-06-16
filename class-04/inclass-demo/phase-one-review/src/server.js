'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const customerRouter = require('./routes/customer');

// not convinced this is necessary - on tree, but not in instructions
const validator = require('./middleware/validator');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);
app.use(customerRouter);
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};
