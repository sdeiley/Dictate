// ------------
// Server Route 
// ------------

'use strict';

var path = require('path');

module.exports = function(app) {
    var index = require(path.join(__dirname, '..', '/controllers/index.express.controller'));
    app.route('/').get(index.render);
};