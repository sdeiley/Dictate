// --------------
// Model for User 
// --------------

'use strict';

var mongoose = require('mongoose')
  ,	crypto = require('crypto')
  ,	Schema = mongoose.Schema;

// Note: Important to equate schema with 'name' fields in view (.ejs files)
var UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true
	},
	username: {
		type: String,
		trim: true,
		unique: true // unique is mongodb index
	},
	password: String,
	provider: String, // strategy used to register user
	providerId: String, // identifier for auth strategy
	providerData: {} // used to store object returned from OAuth providers
});

// 'pre' middleware runs first, hashes passwords for storage
UserSchema.pre('save', 
	function(next) {
		if (this.password) {
			var md5 = crypto.createHash('md5');
			this.password = md5.update(this.password).digest('hex');
		}

		next();
	}
);

// Accepts text password and tests against db hashed password
UserSchema.methods.authenticate = function(password) {
	var md5 = crypto.createHash('md5');
	md5 = md5.update(password).digest('hex');

	return this.password === md5;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne(
		{username: possibleUsername},
		function(err, user) {
			if (!err) {
				if (!user) {
					callback(possibleUsername);
				}
				else {
					return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
				}
			}
			else {
				callback(null);
			}
		}
	);
};

mongoose.model('User', UserSchema);