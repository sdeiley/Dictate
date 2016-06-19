// ----------------------
// Mongoose Configuration
// ----------------------

'use strict';

var path = require('path')
  , config = require(path.join(__dirname, '/config'))
  ,	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	require(path.join(__dirname, '..', '/app/models/user.express.model'));
	require(path.join(__dirname, '..', '/app/models/exercise.express.model'));
	require(path.join(__dirname, '..', '/app/models/workout.express.model'));


	return db;
};