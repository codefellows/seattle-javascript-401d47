'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function notFoundHandler (req, res, next) {
  res.status(404).send('Not Found');
}

module.exports = notFoundHandler;
