// -------------------
// Model for Exercises 
// -------------------

'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ExerciseSchema = new Schema({});

mongoose.model('Exercise', ExerciseSchema);