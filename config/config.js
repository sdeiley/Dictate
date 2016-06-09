// ------
// Config
// ------

var path = require('path');
module.exports = require(path.join(__dirname, '/env/') + process.env.NODE_ENV + '.js');