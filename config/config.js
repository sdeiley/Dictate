// ------
// Config
// ------

'use strict';


/* Takes the command-line created directive NODE_ENV and uses that javascript file
 * for configuration variables (port, db, authentification tokens/links)
 */

/* Options:
 * 
 * 1. developmentSVS -- Shane's Visual Studio Development Environment
 * 2. developmentC9 -- Cloud9 Development Environment
 * 3. production -- (Incomplete) Production Environment
 */
var path = require('path');
module.exports = require(path.join(__dirname, '/env/') + process.env.NODE_ENV + '.js');