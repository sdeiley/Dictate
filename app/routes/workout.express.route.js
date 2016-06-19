// --------------
// Workouts Route
// --------------

'use strict';

var path = require('path')
  , workoutController = require(path.join(__dirname, '..', '/controllers/workout.express.controller'));

module.exports = function (app) {
	app.route('/users/:workoutId')
		.post(workoutController.create)
		.get(workoutController.list) // Gets a list of all user's workouts
	;
	
	app.param('workoutId', workoutController.workoutByID); // Middleware to be run before other routes
	
};

