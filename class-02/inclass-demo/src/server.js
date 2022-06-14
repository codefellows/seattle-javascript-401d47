'use strict';


const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();



const PORT = process.env.PORT || 3002;

function logger(req, res, next) {
  console.log(`REQUEST: ${req.method}, ${req.originalUrl}`);
  next();
}

function validateQuery(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Please enter a name query parameter like this:  /hello?name=Ryan');
  } else {
    console.log('name:', name); 
  }
  next();
}

app.use(logger);

app.get('/hello', validateQuery, (req, res, next) => {
  // can do this either way
  let { name } = req.query;
  // let name = req.query.name;

  // if (!name){
  //   // next('Please enter a name query parameter like this:  /hello?name=Ryan');
  //   res.status(200).send('Simply Hello');
  // } else {
  res.status(200).send(`Personal Greetings ${name}`);
  // }
});

app.get('/hello/:name', (req, res, next) => {
  // console.log(req);
  let { name } = req.params;
  // console.log(name);

  res.status(200).send(`Hello ${name}, from us personally`);
});


// the routes and route handlers below are JUST FOR DEMO.  intentionally creating errors
app.get('/error-using-throw', (req, res, next) => {
  // anytime an error is "thrown" (which is every error you've ever seen), the error handler is triggered
  throw new Error('Whoops, something went wrong!');
});

app.get('/error-using-next', (req, res, next) => {
  // if you call the next() function with ANY value passed to it, automatically triggers an error
  next('Whoops, something ELSE went wrong!');
});

app.use('*', notFoundHandler);

app.use(errorHandler);



module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
