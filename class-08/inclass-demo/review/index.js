'use strict';

const PORT = process.env.PORT || 3002;

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(PORT);
  });

