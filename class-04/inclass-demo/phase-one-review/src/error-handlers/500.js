'uses strict';

// in this example, lets just export an anonymous function
module.exports = function (err, req, res, next){

  // errors will sometimes come in as an object, and sometimes as a string
  // this line of code turns our error into a string
  const error = err.message ? err.message : err;

  // if I want to send json
  // const errorObject = {
  //   status: 500,
  //   path: req.path,
  //   message: error,
  // };

  // res.status(500).json(errorObject);

  res.status(500).send(error);
};
