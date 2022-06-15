'use strict';

const express = require('express');
const peopleRouter = require('./routes/people');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(peopleRouter);


module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};
