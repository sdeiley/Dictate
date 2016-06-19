// ------------------
// Model for Workouts 
// ------------------

'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var WorkoutSchema = new Schema({});

mongoose.model('Workout', WorkoutSchema);