// -----------
// Users Route
// -----------

var path = require('path')
  , usersController = require(path.join(__dirname,'..', '/controllers/users.express.controller'))
  ,	passport = require('passport');

module.exports = function(app) {
	app.route('/users')
		.post(usersController.create)
		.get(usersController.list) // Gets a list of all users
	;

	app.route('/users/:userId')
		.get(usersController.read)
		.put(usersController.update)
		.delete(usersController.delete)
	;

	app.param('userId', usersController.userByID); // Specifies to execute before other param use

	app.route('/register')
		//.get(usersController.renderRegister)
		.post(usersController.register)
	;

	app.route('/login')
		//.get(usersController.renderLogin)
		.post(usersController.login)
	;

	app.route('/logout').get(usersController.logout);

	app.route('/oauth/facebook').get(passport.authenticate('facebook', {
		failureRedirect: '/login',
		scope:['email']
	}));

	app.route('/oauth/facebook/callback').get(passport.authenticate('facebook', {
		failureRedirect: '/login',
		successRedirect: '/',
		scope:['email']
	}));

	app.route('/oauth/twitter').get(passport.authenticate('twitter', {
		failureRedirect: '/login'
	}));

	app.route('/oauth/twitter/callback').get(passport.authenticate('twitter', {
		failureRedirect: '/login',
		successRedirect: '/'
	}));
};

