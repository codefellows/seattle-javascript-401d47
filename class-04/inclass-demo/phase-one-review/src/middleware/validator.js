'use strict';

// need to refactor // but note instructions don't tell me how to validate. AKA this is a low priority
function validateQuery(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Please enter a name query parameter like this:  /hello?name=Ryan');
  } else {
    console.log('name:', name); 
  }
  next();
}

module.exports = validateQuery;
