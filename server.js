// ------
// Server
// ------

'use strict';

// Variables
process.env.NODE_ENV = process.env.NODE_ENV || 'developmentSVS';
var path = require('path');

// Get Configurations
var config = require(path.join(__dirname, '/config/config')) // Must be loaded first
  , mongoose = require(path.join(__dirname, '/config/mongoose')) // Connect error if not loaded before app
  , express = require(path.join(__dirname,'/config/express'))
  , passport = require(path.join(__dirname,'/config/passport')); // Mongoose (i.e. model) needs loaded first

// Start Application parameters
var db = mongoose()
  , app = express()
  , pass = passport();

// Start App
app.listen(config.port, config.ip, function() {
    console.log(process.env.NODE_ENV + ' server running at port ' + config.port);
});

module.exports = app;



/* OLD
// --------------
// Requrie routes
// --------------
require(path.join(__dirname, 'routes/main'))(app); // main/login
require(path.join(__dirname, 'routes/'))(app); // all other routes
*/