// ----------------------
// Passport Configuration
// ----------------------

var passport = require('passport')
  , path = require('path')
  , mongoose = require('mongoose');

module.exports = function() {
	var User = mongoose.model('User');

	// Here, serialization results in saving userid to session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne(
			{_id: id},
			'-password', // instructs mongoose not to fetch password field
			function(err, user) {
				done(err, user);
			}
		);
	});

	require(path.join(__dirname, '/strategies/local.js'))();
	require(path.join(__dirname, '/strategies/facebook.js'))();
	require(path.join(__dirname, '/strategies/twitter.js'))();
};

