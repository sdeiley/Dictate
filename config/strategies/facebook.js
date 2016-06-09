// --------------------------------
// Facebook Authentication Strategy
// --------------------------------

var passport = require('passport')
  , url = require('url')
  , path = require('path')
  ,	FacebookStrategy = require('passport-facebook').Strategy
  ,	config = require(path.join(__dirname, '..', '/config'))
  ,	users = require(path.join(__dirname, '../..', '/controllers/users.server.controller'));

module.exports = function() {
	passport.use(new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL,
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done) {
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;

		var providerUserProfile = {
			name: profile.name.givenName,
			email: profile.emails[0].value,
			username: profile.username,
			provider: 'facebook',
			providerId: profile.id,
			providerData: providerData
		};

		users.saveOAuthUserProfile(req, providerUserProfile, done);
	}));
};
