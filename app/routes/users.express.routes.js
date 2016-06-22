// -----------
// Users Route
// -----------

'use strict';

var path = require('path')
  , usersController = require(path.join(__dirname,'..', '/controllers/users.express.controller'))
  ,	passport = require('passport');

module.exports = function(app) {
	app.route('/users')
		.post(usersController.create) // Creates new user with req.body
		/* 
		 * I don't think this funcationality should be exposed
		 * .get(usersController.list) // Gets a list of all users
		 */
	;

	// Called before functions requiring ID
	app.param('userId', usersController.userByID);
	
	app.route('/users/:userId')
		.get(usersController.read) // Returns json of user with _id: userID
		.put(usersController.update) // Updates user with _id: userID with req.body
		.delete(usersController.delete) // Deletes user with _id: userID
	;

	app.route('/register')
		.get(usersController.renderRegister) // TODO: Undecided if this is what I want
		.post(usersController.register) // Registers user with req.body
	;

	app.route('/login')
		.get(usersController.renderLogin) // TODO: Undecided if this is what I want
		.post(usersController.login) // Logs in user with passport.authenticate
	;

	app.route('/logout').get(usersController.logout);
	
	// Perhaps implement other logins later

	//app.route('/oauth/facebook').get(passport.authenticate('facebook', {
	//	failureRedirect: '/login',
	//	scope:['email']
	//}));

	//app.route('/oauth/facebook/callback').get(passport.authenticate('facebook', {
	//	failureRedirect: '/login',
	//	successRedirect: '/',
	//	scope:['email']
	//}));

	//app.route('/oauth/twitter').get(passport.authenticate('twitter', {
	//	failureRedirect: '/login'
	//}));

	//app.route('/oauth/twitter/callback').get(passport.authenticate('twitter', {
	//	failureRedirect: '/login',
	//	successRedirect: '/'
	//}));
};

