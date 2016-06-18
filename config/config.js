// ------
// Config
// ------

/* Takes the command-line created directive NODE_ENV and uses that javascript file
 * for configuration variables (port, db, authentification tokens/links)
 */

/* Options:
 * 
 * 1. Development
 */
var path = require('path');
module.exports = require(path.join(__dirname, '/env/') + process.env.NODE_ENV + '.js');