// ------------
// Server Route 
// ------------

var path = require('path');

module.exports = function(app) {
    var index = require(path.join(__dirname, '..', '/controllers/index.server.controller'));
    app.get('/', index.render);
};