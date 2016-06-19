// --------------
// Exercise Route
// --------------

'use strict';

var path = require('path')
  , exerciseController = require(path.join(__dirname, '..', '/controllers/exercise.express.controller'));

module.exports = function (app) {
	app.route('/:exerciseId')
		.post(exerciseController.create)
		.get(exerciseController.list)
	;
	
	app.param('exerciseId', exerciseController.exerciseByID); // Middleware to be run before other routes
	
};

