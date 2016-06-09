// -----------
// Users Route
// -----------

var path = require('path')
  , usersController = require(path.join(__dirname,'..', '/controllers/users.server.controller'))
  ,	passport = require('passport');

module.exports = function(app) {
	app.route('/users').post(usersController.create).get(usersController.list); // Gets a list of all users

	// get, put, delete specify different functions to expose 
	app.route('/users/:userId').get(usersController.read).put(usersController.update).delete(usersController.delete);

	app.param('userId', usersController.userByID); // Specifies to execute before other param use

	app.route('/register')
		.get(usersController.renderRegister)
		.post(usersController.register);

	app.route('/login')
		.get(usersController.renderLogin)
		.post(usersController.login);

	app.get('/logout', usersController.logout);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/login',
		scope:['email']
	}));

	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/login',
		successRedirect: '/',
		scope:['email']
	}));

	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/login'
	}));

	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/login',
		successRedirect: '/'
	}));
};

