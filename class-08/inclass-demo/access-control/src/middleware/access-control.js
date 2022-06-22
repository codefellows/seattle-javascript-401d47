'use strict';

// notice the function currying!
module.exports = (capability) => (req, res, next) => {
  try {
    console.log('acl', req.user);
    if(req.user.capabilities.includes(capability)){
      next();
    } else {
      res.status(403).send('Access Denied');
    }

  } catch (e){
    next('Invalid Login');
  }
};
