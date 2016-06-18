// ----------------------
// Mongoose Configuration
// ----------------------

var path = require('path')
  , config = require(path.join(__dirname, '/config'))
  ,	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	require(path.join(__dirname, '..', '/app/models/user.express.model'));

	return db;
};