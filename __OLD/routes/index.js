// -----------------------------------------------------------------
// INDEX: Script to require all route files in /routes automatically
// -----------------------------------------------------------------

var fs = require('fs');

module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if ((file == 'index.js') || // Do not load this file again
            (file == 'main.js')  || // Main loaded with priority app.js
            (file.substr(file.lastIndexOf('.') + 1) !== 'js'))
            return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
}